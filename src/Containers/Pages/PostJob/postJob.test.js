import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme,{shallow} from "enzyme";
import PostJob from "./postJob";
const wrapper = shallow(<PostJob />);
// import sinon from "sinon";
// import {mount} from "enzyme";

Enzyme.configure({adapter: new EnzymeAdapter()})
test('text show', () => {
    const wrapper = shallow(<PostJob/>)
    const heading = wrapper.find("#heading")
    let text = heading.text()
    expect(text).toBe("Post a Job")
});

test('para show', () => {
    const wrapper = shallow (<PostJob/>)
    const para = wrapper.find("#para")
    let text = para.text()
    expect(text).toBe("Post your job in minutes. Contact expert freelancers and get your work done.")

});
test('head show', () => {
    const wrapper = shallow (<PostJob/>)
    const head = wrapper.find("#head")
    let text = head.text()
    expect(text).toBe("01 Personal Details")
});

test('paragraph show', () =>{
    const wrapper = shallow (<PostJob/>)
    const paragraph = wrapper.find("#paragraph")
    let text = paragraph.text()
    expect(text).toBe("Add a title for your job.Explain your job in detail.Attach any file if that helps to describe the job.")
});

test('list1 show', () => {
    const wrapper = shallow (<PostJob/>)
    const list1 = wrapper.find("#list1")
    let text = list1.text()
    expect(text).toBe("02 Job Details")
});
test('list2 show', () => {
    const wrapper = shallow (<PostJob/>)
    const list2 = wrapper.find("#list2")
    let text = list2.text()
    expect(text).toBe("03 Category and Skills")
});
test('list3 show', () => {
    const wrapper = shallow (<PostJob/>)
    const list3 = wrapper.find("#list3")
    let text = list3.text()
    expect(text).toBe("04 Budget")
});
test('list4 show', () => {
    const wrapper = shallow (<PostJob/>)
    const list4 = wrapper.find("#list4")
    let text = list4.text()
    expect(text).toBe("05 Project Special")
});

test('main_label show', () => {
    const wrapper = shallow (<PostJob/>)
    const main_label = wrapper.find("#main_label")
    let text = main_label.text()
    expect(text).toBe("Personal Details")
});
test('label_1 show', () => {
    const wrapper = shallow (<PostJob/>)
    const label_1 = wrapper.find("#label_1")
    let text = label_1.text()
    expect(text).toBe("EMAIL ADDRESS")
});
test('label_2 show', () => {
    const wrapper = shallow (<PostJob/>)
    const label_2 = wrapper.find("#label_2")
    let text = label_2.text()
    expect(text).toBe("FIRST NAME")
});
test('label_3 show', () => {
    const wrapper = shallow (<PostJob/>)
    const label_3 = wrapper.find("#label_3")
    let text = label_3.text()
    expect(text).toBe("LAST NAME")
});
test('label_4 show', () => {
    const wrapper = shallow (<PostJob/>)
    const label_4 = wrapper.find("#label_4")
    let text = label_4.text()
    expect(text).toBe("PASSWORD")
});
test('label_5 show', () => {
    const wrapper = shallow (<PostJob/>)
    const label_5 = wrapper.find("#label_5")
    let text = label_5.text()
    expect(text).toBe("CONFIRM PASSWORD")
});
test('label_6 show', () => {
    const wrapper = shallow (<PostJob/>)
    const label_6 = wrapper.find("#label_6")
    let text = label_6.text()
    expect(text).toBe("LOCATION")
});

// it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = mount((
//       <PostJob onButtonClick={this.onButtonClick} />
//     ));
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });
