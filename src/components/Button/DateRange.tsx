import React from "react"

import DateRangePicker from "react-daterange-picker";
//import { DateRangePicker } from 'react-date-range';
export interface Daterangeprops {
    title:string
    type:string
    onClick?: (title:string,type:string) => void
}

export default (props: Daterangeprops) => {
    const {title,type,onClick} = props;
return (
<div>
<label  >Selected Date:</label>
  <input type={type}   onClick={() => onClick && onClick(title,type)}></input>
  <DateRangePicker/>
</div>
)
}
