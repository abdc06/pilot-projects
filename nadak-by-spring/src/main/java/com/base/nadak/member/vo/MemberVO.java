package com.base.nadak.member.vo;

import com.base.nadak.common.vo.CommonSearchVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class MemberVO extends CommonSearchVO {

    private String memberId;
    private String memberName;
    private String memberPassword;
    private String email;
    private String nickName;
    private String phoneNumber;
}
