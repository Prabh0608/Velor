import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
  AuthenticationContainer,
  AuthPanel,
  AuthDivider,
  AuthHero
} from './authentication.styles.jsx';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <AuthHero>
        <div className="content">
          <span className="label">VELOR ACCOUNT</span>
          <h2>Welcome Back</h2>
          <p>Sign in to access your orders, saved items, and personalized recommendations.</p>
        </div>
        <div className="image">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop" 
            alt="VELOR Store" 
          />
        </div>
      </AuthHero>

      <div className="forms-wrapper">
        <AuthPanel>
          <SignInForm />
        </AuthPanel>

        <AuthDivider>
          <span>OR</span>
        </AuthDivider>

        <AuthPanel>
          <SignUpForm />
        </AuthPanel>
      </div>
    </AuthenticationContainer>
  );
};

export default Authentication;
