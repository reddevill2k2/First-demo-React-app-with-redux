import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const { login } = authAction;
  const dispatch = useDispatch();
  const onLoginHandler = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={onLoginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
