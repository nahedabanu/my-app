import React from "react"
export interface Dateprops {
    title:string
    type:string
    
    
    onClick?: (title:string,type:string) => void
}
export default (props: Dateprops) => {
    const {title,type,onClick} = props;
return (
<div>
<label  >Selected Date:</label>
  <input type={type}   onClick={() => onClick && onClick(title,type)}></input>
</div>
)
}
