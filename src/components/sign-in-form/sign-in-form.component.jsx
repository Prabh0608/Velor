import { useState } from 'react';
import { signInAuthWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-black mb-1">Already have an account?</h3>
      <p className="text-sm text-gray-500 mb-6">Sign in with your email and password</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="flex flex-col gap-3 mt-2">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType='google' onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
