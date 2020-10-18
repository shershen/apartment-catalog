<template>
  <section class="page-container">
    <div class="catalog">
      <h1 class="catalog__title">
        Каталог квартир
      </h1>
      <div class="catalog__list">
        <template v-if="statusLoadApartmentList == 'error'">
          <div class="catalog__error">Не удалось загрузить. Попробуйте обновить страницу</div>
        </template>
        <template v-else-if="!!apartmentList.length">
          <ApartmentCard v-for="apartment in apartmentList" :key="apartment.id" :apartment="apartment" class="catalog__card"/>
        </template>
        <template v-else>
          <SkeletonApartmentCard v-for="n in 10" :key="n" class="catalog__card" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import ApartmentCard from '~/components/ApartmentCard.vue';
import SkeletonApartmentCard from '~/components/SkeletonApartmentCard.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    ApartmentCard,
    SkeletonApartmentCard
  },
  created() {
    this.getApartmentListFromAPi();
  },
  computed: {
    ...mapGetters({
      apartmentList: 'getApartmentList',
      statusLoadApartmentList: 'getStatusLoadApartmentList'
    })
  },
  methods: {
    ...mapActions({
      getApartmentListFromAPi: 'getApartmentListFromAPi'
    })
  }
}
</script>

