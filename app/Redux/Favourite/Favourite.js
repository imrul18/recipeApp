import { createSlice, current } from "@reduxjs/toolkit"

export const Favourite = createSlice({
    name: "favourite",

    initialState: {
        cartArray: [
            {
                id: 1,
                recipe_name: 'মোরগ পোলাও',
                recipe_product: [['মুরগি', '1kg'], ['চাল', '1kg'], ['ডাল', '5/6 p'], ['ডাল', '1kg'], ['ডাল', '1kg'], ['ডাল', '1kg'], ['ডাল', '1kg'], ['ডাল', '1kg'], ['ডাল', '1kg'], ['ডাল', '1kg'], ['ডাল', '1kg'], ['ডাল', '1kg']],
                recipe_process: 'চাল এবং মুগ ডাল ধুয়ে পানি ঝরাতে দিন। প্যানে ঘি অথবা বাটার দিয়ে মাঝারি তাপে গরম করুন। পেয়াজ দিয়ে বেরেস্তা করুন।  মরিচ থেকে দারচিনি পর্যন্ত সব উপকরন যোগ করে ২/৩ মিনিট সুগন্ধ বের না হওয়া পর্যন্ত ভাজুন। লবন এবং গরম পানি দিন। বুদবুদ দেখা মাত্র, ঢাকনা দিয়ে ২০/ ২২ মিনিট বা চাল ও ডাল সেদ্ধ না হওয়া পর্যন্ত রান্না করুন। ভিনেগারে ডুবানো পেঁয়াজ, গরুর রেজালা ও আলু ভর্তা দিয়ে পরিবেশন করুন।',
                recipe_person: '৪-৫ জন',
                recipe_img: require('./../../assets/images/Vat/Polao/1.jpg'),
            },
            {
                id: 2,
                recipe_name: 'pa',
                recipe_desc: 'cal with pani',
                recipe_person: '4-5jon',
                recipe_img: require('./../../assets/images/Vat/Polao/1.jpg'),
            },
            {
                id: 3,
                recipe_name: 'pb',
                recipe_desc: 'cal with pani',
                recipe_person: '4-5',
                recipe_img: require('./../../assets/images/Vat/Polao/1.jpg'),
            }
        ],
    },

    reducers: {
        addingRecipe: (state, action) => {
            const { payload } = action

            state.cartArray = [...demoCartArray]
        },
    }
})

export const { addingRecipe } = Favourite.actions

export default Favourite.reducer