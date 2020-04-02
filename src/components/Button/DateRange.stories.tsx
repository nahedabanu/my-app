import React from "react";
import { storiesOf } from "@storybook/react";
import DateRange from "./DateRange";

storiesOf("DateRange", module)
    .add("Date Selection",
        () => <DateRange title="date1" type="date"   />
    )
    .add("Date and time",
        () => <DateRange  title="date1" type="datetime-local" />
    )

    
