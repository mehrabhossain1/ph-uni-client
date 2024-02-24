import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: 'A-0001',
  //     password: 'admin123',
  //   },
  // });

  const defaultValues = {
    id: 'A-0001',
    password: 'admin123',
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    const toastId = toast.loading('Logging in');
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      navigate(`/${user.role}/dashboard`);

      toast.success('Logged in success', { id: toastId });
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="id" label="ID:" />

        <PHInput type="text" name="password" label="Password:" />

        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </PHForm>
    </Row>
  );
};

export default Login;
