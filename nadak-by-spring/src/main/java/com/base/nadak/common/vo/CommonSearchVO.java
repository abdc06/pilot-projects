package com.base.nadak.common.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class CommonSearchVO {

    private String status;
    private int totalCount = 0;
    private int pageSize = 0;
    private int pageIndex = 0;
    private int rn = 0;

    private String searchText;
    private String searchItem;
    private String orderState;
}
