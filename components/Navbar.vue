<template>
  <div>
    <b-navbar toggleable="sm" fixed="top">
      <b-container>
        <b-navbar-brand>
          <NuxtLink to="/">
            Jiang
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>
              <NuxtLink to="/">
                首页
              </NuxtLink>
            </b-nav-text>
            <b-nav-text>
              <NuxtLink to="/">
                归档
              </NuxtLink>
            </b-nav-text>
            <b-nav-text>
              <NuxtLink to="/categories">
                分类
              </NuxtLink>
            </b-nav-text>
            <b-nav-text>
              <NuxtLink to="/tags">
                标签
              </NuxtLink>
            </b-nav-text>
            <b-nav-text>
              <NuxtLink to="/">
                关于
              </NuxtLink>
            </b-nav-text>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <!-- <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
