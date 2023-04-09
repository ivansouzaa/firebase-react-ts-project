import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import {
  NavbarContainer,
  RightContainer,
  UserArea,
  LeftContainer,
  Logo,
} from "../styles/Navbar.style";
import logoFirebase from "../assets/logo-firebase.png";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const signUserOut = async () => {
    let isTrue = await signOut(auth);
    if (isTrue !== null) {
      navigate("/login");
    }
  };

  return (
    <NavbarContainer>
      <LeftContainer>
        <Logo src={logoFirebase}></Logo>
      </LeftContainer>

      <RightContainer>
        <Link to="/"> Home </Link>
        {!user ? (
          <Link to="/login"> Login </Link>
        ) : (
          <Link to="/createpost"> Create Post</Link>
        )}

        <UserArea>
          {user && (
            <>
              <img
                src={user?.photoURL || ""}
                width="30"
                height="30"
                alt="logo firebase"
              />
              <p> {auth.currentUser?.displayName}</p>
              <button onClick={signUserOut}>Log out</button>
            </>
          )}
        </UserArea>
      </RightContainer>
    </NavbarContainer>
  );
};
