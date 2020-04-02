import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./Button";

import Welcome from "./Example";
storiesOf("Button", module)
  .add("Disabled Button", () => (
    <Button color=""  disabled={true}  clickflag={false}>Disabled Button</Button>
  ))
  .add("With icons", () => (
    <Button  color=""  disabled={true}  clickflag={true}>  👍 </Button>
  ))
  .add("Clickable Button", () => (
    <Button color=""  disabled={false}  clickflag={true}>Click Button</Button>
  ))
  .add("Greeting", () => (
    <Welcome name="" />
  ))
  .add("Colored Button",() => (
  <Button  color="red"  disabled={false}  clickflag={false}>Colored Button</Button>
    ))
  ;