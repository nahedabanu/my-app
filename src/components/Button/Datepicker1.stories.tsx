import React from "react";
import { storiesOf } from "@storybook/react";
import DateSelector from "./Datepicker1";

storiesOf("DateSelector", module)
    .add("Date Selection",
        () => <DateSelector title="date1" type="date"   />
    )
    .add("Date and time",
        () => <DateSelector  title="date1" type="datetime-local" />
    )

    
