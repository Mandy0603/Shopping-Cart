import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adaptor() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
