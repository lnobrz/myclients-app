<h1>My Clients App</h1>
<h2>What it is?</h2>
<p>
  Welcome to My Clients App. This react app was created with the purpose of
  displaying My Clients users data on a friendly UI. In this webapp, you'll be
  able to see a My Clients users list and users details.
</p>
<h2>Requirements</h2>
<p>
  To run this application locally, you'll need to have NodeJS installed on your
  machine. Full NodeJS documentation <a href="https://nodejs.org/en">here</a>.
</p>
<p>
  Also, this app was made with the purpose of only working with my credentials,
  so, if you want to access this app, you'll need to get my My Clients account,
  otherwise, you'll not get authenticated.
</p>
<h2>Usage</h2>
<h3>Starting Client Locally</h3>
<p>
  After clonning this repository, you'll need to run "npm install" on the root
  directory of this project, so all dependencies can be installed properlly.
</p>
<p>
  To run the application locally, run "npm run dev" on the root folder of this
  directory. The default port for this application is 5173.
</p>
<h2>Pages</h2>
<h3>Auth Page</h3>
<p>
  This is the first page you'll see when getting in the application. The
  "authenticate" button send a request to My Clients Server, which will start
  the authentication proccess.
</p>
<p>
  Note: when authenticating yourself, choose "TEST account", which is the
  account that retrieves the right credentials to make API Requests. If you
  choose the other account, you'll not get the locationId, which is neccessary
  for My Clients users API requests.
</p>
<h3>Home Page</h3>
<p>
  This is the page that will display a users list. Click on an user and you'll
  be redirected to user details page.
</p>
<h3>Users Details</h3>
<p>This page will show users details</p>
<h3>Warning Pages</h3>
<p>
  Warning Pages are pages designed to be rendered when something wrong happens,
  so the users will get to know what is happening and how to solve it.
</p>
<h4>Authenticated Page</h4>
<p>
  This page will be rendered when the user try to access "/auth" route but it
  already has a valid access token.
</p>
<h4>Unauthenticated Page</h4>
<p>
  This page will be displayed when the user is trying to access some route that
  is only allowed to authenticated users.
</p>
<h4>Error Page</h4>
<p>This Page will be showed up when some unexpected error happens.</p>
<h2>Components</h2>
<h3>Unauthenticate Button</h3>
<p>This Button will erase user credentials from browser local storage.</p>
<h3>Logos</h3>
<p>Logos component serves as links to home screen.</p>
<h2>Stacks</h2>
<p>My Clients App uses the following stacks:</p>
<ul>
  <li>Typescript</li>
  <li>React</li>
  <li>Styled Components</li>
  <li>Material UI</li>
  <li>React Router</li>
</ul>
