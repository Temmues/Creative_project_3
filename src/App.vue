<template>
<div>
  <div id = "page_links">
    <router-link to="/">
    <a>Home</a>
    </router-link>
    <router-link to="/fiction_ratings">
    <a>Fiction</a>
    </router-link>
    <a>Non-fiction</a>
  </div>
  <router-view />
</div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #CC1228;
  color: white;
  text-align: center;
}

h1
{
  font-family: 'Aclonica';
  font-size: 45px;
  padding: 40px;
  text-align: center;
}

#page_links
{
  background-color: #CC1228;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Aclonica';
  font-size: 25px;
}

#page_links > a
{
  color: inherit;
  margin: 10px;
}

a:link {
  text-decoration: none;
}


.text
{
  margin: 60px;
  text-align: left;
  padding-bottom: 50px;
}

.text > p
{
  font-size: 25px;
  font-family: 'Courier Prime',sans-serif;
}
</style>
