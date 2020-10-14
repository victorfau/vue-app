import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    let from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    let to = "aaaaaaeeeeiiiioooouuuunc------";

    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-") // collapse dashes
        .replace(/^-+/, "") // trim - from start of text
        .replace(/-+$/, ""); // trim - from end of text

    return str;
}

export const store = new Vuex.Store({
	state: {
		user: {
			name: 'victor',
			lastname: 'fau',
			email: 'admin@admin.com',
			role: 'dev',
            is_auth: true
		},
        need_save: false,
        general_content: {},
        pages: [],
        watch: {}
	},
	mutations: {
		change(state, user) {
			state.user = user
		},
		mounted(state, data){
		    state.general_content = data.general_content
		    state.pages = data.pages
        },
        watch(state, page){
		    state.watch = state.pages.find(el => el.link === page)
            state.watch.content = state.watch.content.sort((a, b) => (a.order > b.order) ? 1 : -1)
        },
        create_page(state, page){
		    state.pages.push({
                name: page,
                link: string_to_slug(page),
                active: false,
                content: []
            })
            state.need_save = true
        },
        data_save(state){
		    state.need_save = false
        },
	},
	getters: {
		user: state => state.user
	}
})
