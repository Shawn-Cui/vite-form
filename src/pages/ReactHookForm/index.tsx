/*
 * @Author: cuitao
 * @Date: 2021-03-02 11:05:38
 * React Hook Form 版本
 */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Header from './Header';
import './index.css';

const ReactHookForm = () => {
  const methods = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <div className="form">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Header />
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default ReactHookForm;