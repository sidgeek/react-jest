import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Parent from "../components/Parent";
import Child from "../components/Child";
import Grandson from "../components/Grandson";

Enzyme.configure({ adapter: new Adapter() });

describe.skip("enzyme test", () => {
  describe("snap", () => {
    it("renders <Parent /> components with shallow", () => {
      const wrapper = render(<Parent />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("different between shallow and mount", () => {
    it("renders <Parent /> components with shallow", () => {
      const wrapper = shallow(<Parent />);
      // console.log(wrapper.debug());
      expect(wrapper.find(Child).length).toBe(3);
    });

    it("renders <Parent /> components with mount", () => {
      const wrapper = mount(<Parent />);
      // console.log(wrapper.debug());
    });
  });

  describe("check ele with selector", () => {
    it("check button with shallow", () => {
      const wrapper = shallow(<Parent />);
      expect(wrapper.find(".myButton").length).toBe(1);
      expect(wrapper.find("button").length).toBe(1);
    });
  });

  describe("different between shallow and mount", () => {
    it("check child component with shallow", () => {
      const wrapper = shallow(<Parent />);
      console.log(wrapper.find(Child).length);
      console.log(wrapper.find("Child").length);
      expect(
        wrapper
          .find(Child)
          .first()
          .find(Grandson).length
      ).toBe(0);
    });

    it("check child component with shallow", () => {
      const wrapper = mount(<Parent />);
      console.log(wrapper.find(Child).length);
      console.log(wrapper.find("Child").length);

      expect(
        wrapper
          .find(Child)
          .first()
          .find(Grandson).length
      ).toBe(1);
    });
  });
});
