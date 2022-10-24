package com.base.nadak;

import com.base.nadak.common.config.AppConfig;
import com.base.nadak.common.config.DBConfig;
import com.base.nadak.common.config.WebConfig;
import com.base.nadak.common.filter.HTMLTagFilter;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

public class WebAppInitializer implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        AnnotationConfigWebApplicationContext appContext = new AnnotationConfigWebApplicationContext();
        appContext.register(AppConfig.class);
        appContext.register(DBConfig.class);

        servletContext.addListener(new ContextLoaderListener(appContext));

        AnnotationConfigWebApplicationContext webContext = new AnnotationConfigWebApplicationContext();
        webContext.register(WebConfig.class);

        DispatcherServlet dispatcherServlet = new DispatcherServlet(webContext);
        ServletRegistration.Dynamic action = servletContext.addServlet("action", dispatcherServlet);

        action.setLoadOnStartup(1);
        action.addMapping("/");

        addFilters(servletContext);
    }

    private void addFilters(ServletContext servletContext) {
        FilterRegistration.Dynamic characterEncodingFilter = servletContext.addFilter("characterEncodingFilter", CharacterEncodingFilter.class);
        characterEncodingFilter.setInitParameter("encoding", "UTF-8");
        characterEncodingFilter.addMappingForUrlPatterns(null, false, "/*");

        FilterRegistration.Dynamic htmlTagFilter = servletContext.addFilter("htmlTagFilter", HTMLTagFilter.class);
        htmlTagFilter.addMappingForUrlPatterns(null ,false, "/*");
    }
}
