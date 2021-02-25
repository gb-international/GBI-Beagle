<template>
  <div class="dashboard-body-part-one">
    <div id="rowbody">
      <div class="row">
        <div class="col colbutton mb-10">
          <router-link :to="`/tour-list`">
            <div class="rowdata1">
              <img src="assets/front/images/booked_320.png" loading="lazy" />
              <p class="icon_text">Booked Itinerary</p>
            </div>
          </router-link>
        </div>
        <div class="col colbutton mb-10">
          <a href="#">
            <div class="rowdata2">
              <img src="assets/front/images/payment_320.png" loading="lazy" />
              <p class="icon_text">Payments</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>