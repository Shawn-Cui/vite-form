/*
 * @Author: cuitao
 * @Date: 2021-03-02 11:05:38
 * React Hook Form 版本
 */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Input, Select,
} from 'antd';

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const ReactHookForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  console.log(watch("name"));
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">姓名</label>
      <input name="name" defaultValue="Shawn" ref={register} />

      <label htmlFor="name">邮箱</label>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <span>邮箱为必填项</span>}

      <Controller
        name="setRoutingName"
        control={control}
        defaultValue=""
        as={Input}
      />

      <Controller
        name="setRoutingType"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <Select onChange={onChange} value={value}>
            {options.map(v => (
              <Select.Option key={v.value} value={v.value}>
                {v.label}
              </Select.Option>
            ))}
          </Select>
        )}
      />

      <input type="submit" />
    </form>
  );
};

export default ReactHookForm;