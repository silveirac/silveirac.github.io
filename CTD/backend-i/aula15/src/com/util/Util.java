package com.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Util {

    private Util util = new Util();

    private Util () {
    }


    public static Timestamp dateToTimestamp(Date date){
        Timestamp timestamp = new Timestamp(date.getTime());
        //SimpleDateFormat formatter = new SimpleDateFormat("yyy-MM-dd HH:mm:ss");
        //return formatter.format(timestamp);
        return  timestamp;
    }
}
