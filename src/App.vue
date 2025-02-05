<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg" style="background-color: goldenrod;">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Analizator</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/marginCalc">Margin calculator</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Charts
              </a>
              <ul class="dropdown-menu">
                <li><RouterLink class="dropdown-item" to="/clients">Clients</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/products">Products</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/orders">Orders</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/markets">Markets</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/couriers">Couriers</RouterLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/settings">Settings</RouterLink>
            </li>
          </ul>
        </div>
      </div>
</nav>
  </header>

  <RouterView />
</template>