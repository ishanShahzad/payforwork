import React from 'react'
import enzyme,{shallow} from "enzyme";
import adapter from "enzyme-adapter-react-16";
enzyme.configure({adapter:new adapter()})
import Searchbar from "../Components/searchbar/serchbar.jsx"
const wrapper = shallow(<Searchbar/>)
describe("searchbar" ,()=>{
    it("dev", () => {
        const input = wrapper.find(".umer")
        const type = input.prop("type")
        expect(type).toEqual("text")
    })
})
