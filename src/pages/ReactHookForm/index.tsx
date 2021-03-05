/*
 * @Author: cuitao
 * @Date: 2021-03-02 11:05:38
 * React Hook Form 版本
 */
import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  console.log(watch("name"));
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">姓名</label>
      <input name="name" defaultValue="Shawn" ref={register} />

      <label htmlFor="name">邮箱</label>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <span>邮箱为必填项</span>}

      <input type="submit" />
    </form>
  );
};

export default ReactHookForm;