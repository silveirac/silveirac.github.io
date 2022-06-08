<?php

class Action {
    
	public function doSomething($param1,$param2,$param3,$param4,$param5,$param6) {
        $return['calc_factor'] = ($param1 + $param3 + $param4 + $param5) * $param6;
        $return['vlr_type'] = "";
        
        array_map(function ($param2) {
            return['vlr_type'] = $param2['vlr'] == 0 ? "FREE" : 
                $param2['vlr'] >= 0.01 and $param2['vlr'] <= 10 ? "CHEAP" :
                $param2['vlr'] > 10 and $param2['vlr'] <= 20 ? "GOOD_VALUE" : "EXPENSIVE";
        }, $param2);

        return $return;
	}
}