<main>
  <h1>My Clients App</h1>
  <section>
    <h2>What it is?</h2>
    <p>
      An application that allows the user to authenticate in a My Clients
      account and see a list of the users and its details on it.
    </p>
  </section>
  <section>
    <h2>Requirements</h2>
    <section>
      <h3>Running Locally</h3>
      <ul>
        <li>
          <p>
            NodeJS 18^ is required to run this client locally. Full NodeJS
            documentation <a href="https://nodejs.org/en">here</a>.
          </p>
        </li>
        <li>
          <p>
            If you want to, you can run our server locally too. Full
            documentation here
            <a href="https://github.com/lnobrz/myclients-server">here</a>.
          </p>
        </li>
        <li>
          <p>
            If you're going to run our server locally, you'll need to change the
            url prop passed on the LinkButton of the Auth Page. Just go to
            src/pages/Auth.tsx and replace the url to "localhost:8080" or the
            port you've set to your local server.
          </p>
        </li>
        <li>
          <p>
            Finally, you need a My Clients account to run this app. Find more
            <a href="https://www.gomyclients.com/">here</a>.
          </p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Running The Web Version</h3>
      <ul>
        <li>
          <p>
            Just go to
            <a href="https://myclients-app.vercel.app/"
              >https://myclients-app.vercel.app/</a
            >
          </p>
        </li>
      </ul>
    </section>
  </section>
  <section>
    <h2>Usage</h2>
    <h3>Starting Client Locally</h3>
    <p>
      After cloning this repository, you'll need to run "npm install" on the
      root directory of this project, so all dependencies can be installed
      properly.
    </p>
    <p>
      To run the application locally, run "npm run dev" on the root folder of
      this directory. The default port for this application is 5173.
    </p>
  </section>
  <section>
    <h2>Pages</h2>
    <h3>Auth Page</h3>
    <p>
      This is the first page you'll see when getting in the application. The
      "authenticate" button send a request to My Clients Server, which will
      start the authentication process.
    </p>
    <h3>Home Page</h3>
    <p>
      This is the page that will display a users list. Click on an user and
      you'll be redirected to user details page.
    </p>
    <h3>Users Details</h3>
    <p>This page will show users details</p>
    <h3>Warning Pages</h3>
    <p>
      Warning Pages are pages designed to be rendered when something wrong
      happens, so the users will get to know what is happening and how to solve
      it.
    </p>
    <h4>Authenticated Page</h4>
    <p>
      This page will be rendered when the user try to access "/auth" route but
      it already has a valid access token.
    </p>
    <h4>Unauthenticated Page</h4>
    <p>
      This page will be displayed when the user is trying to access some route
      that is only allowed to authenticated users.
    </p>
    <h4>Error Page</h4>
    <p>This Page will be showed up when some unexpected error happens.</p>
  </section>
  <section>
    <h2>Stacks</h2>
    <p>My Clients App uses the following stacks:</p>
    <ul>
      <li>Typescript</li>
      <li>React</li>
      <li>Styled Components</li>
      <li>Material UI</li>
      <li>React Router</li>
    </ul>
  </section>
  <section>
    <h2>Contact Me</h2>
    <p>
      Faced any problems? Don't hesitate to contact me on
      <a href="mailto:lucasnobre037@gmail.com">lucasnobre037@gmail.com</a> or
      <a href="mailto:lucasnobre37@outlook.com">lucasnobre37@outlook.com</a>.
    </p>
  </section>
</main>
