export const state = () => ({
    apartmentList: [],
    favoriteApartments: [],
    statusLoadApartmentList: ''
});
export const mutations = {
    setApartmentList(state, data) {
        state.apartmentList = data;
    },
    addFavoriteApartment(state, id) {
        state.favoriteApartments.push(id);
    },
    deleteFavoriteApartment(state, id) {
        let index = state.favoriteApartments.indexOf(id);
        if (index >= 0) state.favoriteApartments.splice(index, 1);
    },
    setStatusLoadApartmentList(state, status) {
        state.statusLoadApartmentList = status;
    }
};
export const getters = {
    getApartmentList: state => {
        return state.apartmentList;
    },
    getFavoriteApartments: state => {
        return state.favoriteApartments;
    },
    getStatusLoadApartmentList: state => {
        return state.statusLoadApartmentList;
    }
};
export const actions = {
    getApartmentListFromAPi(context) {
        this.$axios.$get('/apartment-list.json')
        .then((response) => {
            setTimeout(() => {
                context.commit('setApartmentList', response)
            }, 700);
        })
        .catch((error) => {
            if (error) context.commit('setStatusLoadApartmentList', 'error')
        })
    }
};