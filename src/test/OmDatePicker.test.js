import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OmDatePicker from '../component/OmDatePicker';
import {
    TimePicker,
    DatePicker,
} from '@material-ui/pickers';

configure({ adapter: new Adapter() });

function handleDateChange(date) {
    //do something with date
}

test('test Datepicker render', () => {
    const tree = renderer
        .create(<OmDatePicker id={'datePicker'} variant="date"
            onDateChange={handleDateChange} placeholder={'pick a date'} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('test Timepicker render', () => {
    const tree = renderer
        .create(<OmDatePicker id={'timePicker'} variant="time"
            onDateChange={handleDateChange} placeholder={'pick a time'} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('test Datepicker placeholder', () => {

    const wrapper = shallow(
        <OmDatePicker id={'datePicker'} variant="date"
            onDateChange={handleDateChange} placeholder={'pick a time'} />
    );

    const datepicker = wrapper.find('#datePicker');
    expect(datepicker.prop('placeholder')).toBe('pick a time');
});

test('test Datepicker format', () => {
    const expected = 'MM/dd/yyyy';
    const wrapper = shallow(
        <OmDatePicker id={'datePicker'} variant="date"
            onDateChange={handleDateChange} dateformat={expected} />
    );

    const datepicker = wrapper.find('#datePicker');
    expect(datepicker.prop('format')).toBe(expected);
});

test('test Datepicker readonly', () => {
    const expected = true;
    const wrapper = shallow(
        <OmDatePicker id={'datePicker'} variant="date"
            onDateChange={handleDateChange} readOnly={expected} />
    );

    const datepicker = wrapper.find('#datePicker');
    expect(datepicker.prop('disabled')).toBe(expected);
});

// test('test open Dialog by click input', () => {
//     const expected = new Date();
//     const wrapper = mount(
//         <OmDatePicker id={'datePicker'} variant="date"
//             onDateChange={handleDateChange} />
//     );

//     expect(wrapper.find(DatePicker).prop('open')).toBe(false);

//     wrapper.find('input').simulate('click');

//     expect(wrapper.find(DatePicker).prop('open')).toBe(true);
// });

// test('test open Dialog by click input', () => {
//     const expected = new Date();
//     const wrapper = mount(
//         <OmDatePicker id={'datePicker'} variant="date"
//             onDateChange={handleDateChange} />
//     );

//     expect(wrapper.find(DatePicker).prop('open')).toBe(false);

//     wrapper.find('button').simulate('click');

//     expect(wrapper.find(DatePicker).prop('open')).toBe(true);
// });

// test('test date change function', () => {
//     const handleDateChangeMock = jest.fn();
//     var updatedDate = null;
//     const originalDate = new Date('2020-01-01');
//     const newDate = new Date('2020-06-06');
//     const wrapper = mount(
//         <OmDatePicker id={'datePicker'} variant="date"
//             onDateChange={handleDateChangeMock} date={originalDate} />
//     );

//     const event = {
//         target: { value: newDate }
//     };

//     expect(updatedDate).toBe(null);

//     const datePicker = wrapper.find(DatePicker);

//     expect(datePicker.prop('value')).toBe(originalDate);

//     datePicker.props().onChange(event);

//     expect(handleDateChangeMock).toBeCalledWith(event);
// });
