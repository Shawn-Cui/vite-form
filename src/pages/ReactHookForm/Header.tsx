/*
 * @Author: cuitao
 * @Date: 2021-03-26 10:52:34
 * 头部信息
 */
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  Input, Select, Row, Col, Form,
} from 'antd';

const FormLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const options = [{
  id: 1,
  name: '轴承',
}, {
  id: 2,
  name: '螺丝',
}];

const Header = () => {
  const { control, errors } = useFormContext();

  const hasErrorClass = (name: string) => ({
    className: (errors as any)[name] && 'has-error',
  });
  
  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Form.Item
            {...FormLayout}
            label="工艺编号"
            required
            {...hasErrorClass('setRoutingCode')}
          >
            <Controller
              control={control}
              name="setRoutingCode"
              defaultValue=""
              as={Input}
              rules={{ required: true }}
            />
            {errors.setRoutingCode && (
              <div className="ant-form-explain">请填写工艺编号</div>
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...FormLayout}
            label="工艺名称"
            required
            {...hasErrorClass('setRoutingName')}
          >
            <Controller
              control={control}
              name="setRoutingName"
              defaultValue=""
              as={Input}
              rules={{ required: true }}
            />
            {errors.setRoutingName && (
              <div className="ant-form-explain">请填写工艺名称</div>
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item {...FormLayout} label="物料">
            <Controller
              control={control}
              name="item"
              defaultValue=""
              render={(props) => (
                <Select
                  placeholder="请选择物料"
                  {...props}
                  style={{ width: '100%' }}
                >
                  {options.map(v => (
                    <Select.Option key={v.id} value={v.id}>
                      {v.name}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </Form.Item> 
        </Col>
      </Row>
    </>
  )
};

export default Header;