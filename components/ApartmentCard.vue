<template>
  <div class="apartment-card">
    <div class="apartment-card__photo">
      <img :src="apartmentPhoto" :alt="apartment.name">
      <button @click="setFavoriteApartment()" class="apartment-card__favorite-btn" :class="{'isFavorite': isFavorite}">
          <svg class="apartment-card__favorite-btn-icon" version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024">
          <path d="M512 85.333l125.393 254.077 280.393 40.743-202.893 197.772 47.898 279.258-250.79-131.849-250.788 131.849 47.896-279.258-202.892-197.772 280.39-40.743 125.394-254.077z"></path>
          </svg>
      </button>
    </div>
    <div class="apartment-card__info">
      <div class="apartment-card__name">{{apartment.name}}<template v-if="!!apartment.square">, {{apartment.square}}м<sup>2</sup></template><template v-if="!!apartment.floor">, {{apartment.floor}}<template v-if="!!apartment.floors">/{{apartment.floors}}</template> этаж</template></div>

      <div class="apartment-card__price">{{formatPrice(apartment.price)}} &#x20bd;</div>
      <div class="apartment-card__complex">{{apartment.complex}}</div>

      <div class="apartment-card__description">{{apartment.description}}</div>
      <button class="apartment-card__phone" @click="showPhone = true">
        <span v-if="!showPhone" class="apartment-card__phone-inner">Показать телефон</span>
        <a v-else :href="'tel:' + apartment.phone.replace(/\s/g, '')" class="apartment-card__phone-inner">{{apartment.phone}}</a>
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { formatPrice } from '~/assets/js/format-data'

export default {
  props: {
    apartment: {
      type: Object,
      required: true
    }
  },
  data() {
    return{
      showPhone: false,
      formatPrice
    }
  },
  computed: {
    ...mapGetters({
      favoriteApartmens: 'getFavoriteApartments'
    }),
    apartmentPhoto() {
      if (!!this.apartment && !!this.apartment.photo.length) return this.apartment.photo[0]
    },
    isFavorite() {
      if (!!this.apartment && this.favoriteApartmens.includes(this.apartment.id)) return true;
      return false;
    }
  },
  methods: {
    ...mapMutations({
      addFavoriteApartment: 'addFavoriteApartment',
      deleteFavoriteApartment: 'deleteFavoriteApartment'
    }),
    setFavoriteApartment() {
      if (this.isFavorite) {
        this.deleteFavoriteApartment(this.apartment.id);
      } else {
        this.addFavoriteApartment(this.apartment.id);
      }
    }
  }
}
</script>