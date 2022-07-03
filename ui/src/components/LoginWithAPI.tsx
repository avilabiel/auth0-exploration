import axios from "axios";

const LoginWithAPI = () => {
  const handleClick = async () => {
    const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize`;
    const params: any = {
      response_type: "token",
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      // connection: "google-oauth2",
      redirect_uri: "https://f80d-179-125-208-242.sa.ngrok.io",
      state: "123asd",
    };

    // const response = await axios.get(url, {
    //   params,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // });

    let queryString = new URLSearchParams();
    for (let key in params) {
      queryString.append(key, params[key]);
    }

    const response = await fetch(url + "?" + queryString.toString(), {
      method: "GET",
      cache: "no-cache",
      mode: "cors",
      redirect: "follow",
    });

    // ERROR: 302, maybe because of visit page NGROK the browser does not redirect automatically

    console.log(response);
  };

  return <button onClick={() => handleClick()}>Log In with API</button>;
};

export default LoginWithAPI;
