import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao fazer login: {error.message}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Bem-vindo ao SaúdeGlobal</h2>
      {!user ? (
        <>
          <p>Faça login com sua conta Google:</p>
          <button onClick={() => signInWithGoogle()}>Login com Google</button>
        </>
      ) : (
        <>
          <p>Logado como: {user.user.email}</p>
          <Link to="/">Ir para o Dashboard</Link>
        </>
      )}
    </div>
  );
};

export default Login;