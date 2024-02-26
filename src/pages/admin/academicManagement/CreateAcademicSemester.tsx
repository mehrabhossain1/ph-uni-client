import { Button, Col, Flex } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';

const nameOptions = [
  {
    value: '01',
    label: 'Autumn',
  },
  {
    value: '02',
    label: 'Summer',
  },
  {
    value: '03',
    label: 'Fall',
  },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const semesterData = {
      name: 'something',
      code: 'something',
    };

    console.log(semesterData);
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          {/* <PHInput type="text" name="name" label="Name" />
          <PHInput type="text" name="year" label="Year" /> */}

          <PHSelect label="Name" name="name" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
