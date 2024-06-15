<template>
    <div class="bg-banner__black">
        <div class="mt-0 z-50 grid md:justify-items-stretch lg:grid-cols-3 lg:items-center py-2 px-6 md:px-16 content-center inline-grid">
            <div class="lg:flex hidden">
                <div class="justify-self-start lg:inline-grid items-center rounded-md py-2">
                    <div class="flex inline-flex absolute">
                        <button @click="searchAction">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <span class="text-white block w-full p-4 pl-10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 uppercase hover:underline" >Search</span>
                        </button>

                        <div v-if="open" class="modal">
                            <div class="modal-search-outer-box">
                                <div class="modal-search-inner-box sm:w-1/3 w-1/5 mt-24 rounded-lg">
                                    <div class="-mt-4 -mr-4">
                                        <a
                                            @click="closeSearchAction"
                                            class="close cursor-pointer	"
                                        >&times;</a>
                                    </div>
                                    <form
                                        @submit.prevent="searchResources"
                                        method="POST"
                                        class="my-8 mx-24">
                                        <input
                                            class="z-0 rounded-full text-sm py-2 focus:outline-none focus:shadow-outline pl-4 w-full mt-6"
                                            type="text"
                                            name="search"
                                            v-model="this.search"
                                            placeholder="Search posts, tags and authors"
                                        >
                                    </form>
                                    <div class="px-4">
                                        <!-- Spinner     v-if="this.isLoading"-->
                                        <div v-if="this.isLoading" class="mb-4">
                                            <div class="p-4 max-w-sm w-full mx-auto">
                                                <div class="animate-pulse flex space-x-4 px-2">
                                                    <div class="rounded-full bg-slate-700 w-12 h-12"></div>
                                                    <div class="flex-1 space-y-2 py-3">
                                                        <div class="h-2 bg-slate-700 rounded"></div>
                                                        <div class="h-2 bg-slate-700 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mx-14">
                                            <div
                                                v-if="this.search.length === 0 || resources.length === 0"
                                                v-show="message"
                                                class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
                                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                <span class="sr-only">Info</span>
                                                <div>
                                                    <span class="font-medium">Info!</span> {{this.message}}
                                                </div>
                                            </div>
                                        </div>

                                        <div v-if="resources.length > 0">
                                            <p class="text-sm">{{resources.length}} results found</p><br>

                                            <div class="h-96 relative overflow-y-auto shadow-md sm:rounded-lg mb-6">
                                                <table class="w-full text-sm text-left text-gray-500 ">
                                                    <thead class="text-xs text-gray-700 uppercase">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3">

                                                        </th>
                                                        <th scope="col" class="px-2 py-3">
                                                            <p>Title</p>
                                                        </th>

                                                    </tr>
                                                    </thead>
                                                    <tbody v-for="resource in resources">
                                                    <tr class="bg-white">
                                                        <th scope="row" class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                            <a :href="`/articles/detail/${resource.slug}`">
                                                                <img src="../../../../public/src/egpyt.jpg" alt="hero" class="rounded-full w-12 h-12 hover:opacity-85">
                                                            </a>
                                                        </th>
                                                        <td class="px-2 py-4">
                                                            <a :href="`/articles/detail/${resource.slug}`">
                                                                <p class="hover:underline">{{resource.title}}</p>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:mt-0 justify-self-center inline-grid">
                <img src="../img/odyssey_white.png" alt="odyssey">
            </div>

            <!-- <div class="md:mt-0 grid items-center justify-self-end lg:grid hidden">
                <div v-if="canLogin" class="hidden top-0 right-0 px-6 py-4 sm:block">
                    <Dropdown v-if="$page.props.auth.user" align="right" width="48">
                        <template #trigger>
                            <span class="inline-flex rounded-md">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >Welcome, {{this.first_name}}
                                    <svg
                                        class="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </template>

                        <template #content>
                            <DropdownLink :href="route('dashboard')"> Dashboard </DropdownLink>
                            <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                            <DropdownLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </DropdownLink>
                        </template>
                    </Dropdown>

                    <template v-else>
                        <Link :href="route('login')" class="text-sm uppercase hover:underline">Sign in</Link>

                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="ml-4 text-sm text-white uppercase register-button py-2 px-4"
                        >Register</Link
                        >
                    </template>
                </div>
            </div> -->
        </div>
        <hr>
        <div class="w-full items-center md:flex hidden text-white relative justify-center space-x-4 py-3">
            <span @mouseover="nflHoverOver" @mouseleave="nflHoverLeave">
                <p class="px-2 hover:underline uppercase text-sm">NFL</p>
                <ul class="bg-banner__black absolute px-2 hover:cursor-pointer" :class="{ 'hidden z-50 ': nflHover }">
                    <li class="py-1 hover:underline">
                        <a href="/team-stats">Team Stats</a>
                    </li>
                    <li class="py-1 hover:underline">
                        <a href="/quarterbacks">Quarterbacks</a>
                    </li>
                    <li class="py-1 hover:underline">
                        <a href="/running-backs">Running Backs</a>
                    </li>
                    <li class="py-1 hover:underline">
                        <a href="/wide-receivers">Wide Receivers</a>
                    </li>
                    <li class="py-1 hover:underline">
                        <a href="/tight-ends">Tight Ends</a>
                    </li>
                    <li class="py-1 hover:underline">
                        <a href="/projections-nfl">Projections</a>
                    </li>
                </ul>
            </span>
            <p class="text-sm">|</p>
            <a href="#" @mouseover="nbaHoverOver" @mouseleave="nbaHoverLeave">
                <p class="px-2 hover:underline uppercase text-sm">NBA</p>
                <ul class="bg-banner__black absolute px-2" :class="{ 'hidden z-50 ': nbaHover }">
                    <li class="py-1 hover:underline">
                        <a href="/nba-player-stats">Player Stats</a>
                    </li>
                    <li class="py-1 hover:underline">
                        <a href="/nba-team-stats">Team Stats</a>
                    </li>
                    <li class="py-1 hover:underline">
                        <a href="/draft">Draft Hub</a>
                    </li>
                </ul>
            </a>
            <p class="text-sm">|</p>
            <a href="#">
                <p class="px-2 hover:underline uppercase text-sm">Games</p>
            </a>
            <p class="text-sm">|</p>
            <a href="#">
                <p class="px-2 hover:underline uppercase text-sm">Technology</p>
            </a>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: 'Navbar',
    async created() {
    },
    data() {
        return {
            isLoading : false,
            first_name: '',
            open: false,
            resources: [],
            search: '',
            message: '',
            nflHover: true,
            nbaHover: true,
            hasError: false,
        }
    },
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        canAdmin: Boolean
    },
    methods: {
        searchAction(){
            this.open = true;
            document.body.style.overflowY = 'hidden';
        },
        closeSearchAction(){
            this.open = false;
            document.body.style.overflowY = '';
            this.resources = [];
            this.search = '';
        },
        nflHoverOver() {
            this.nflHover = false;
        },
        nflHoverLeave(){
            this.nflHover = true;
        },
        nbaHoverOver() {
            this.nbaHover = false;
        },
        nbaHoverLeave(){
            this.nbaHover = true;
        },
        closeModal() {
            this.isShowModal = false
            return this.isShowModal
        },
        showModal() {
            alert('hi')
            this.isShowModal = true
            return this.isShowModal
        },
    }
}
</script>

<style scoped>
#navbar{
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0 ,10%);
}
nav{
    background-color: white;
    top: 0;
    color: black;
    position: fixed;
    margin-bottom: 5rem;
}
.modal {
    position: fixed;
    z-index: 999;
    background-color: rgb(26,26,26,0.1);
    backdrop-filter: blur(3px);
    height: 120vh;
    width: 100%;
    margin-left: -64px;
    margin-top: -33px;
}
.modal-search-outer-box{
    z-index: 999;
    opacity: 1;
    display: flex;
    justify-content: center;
}
.modal-search-inner-box{
    background-color: rgb(255,255,255);
}
.modal-search{
    /*background-color: rgb(24,28,55,0.8);*/
    border-radius: 2rem;
    padding: 3rem;
}
.modal-search-close-box{
    padding: 5px;
}
.close{
    padding: 6px 14px;
    float: right;
    font-size: 20px;
    border-radius: 50%;
    background-color: #F4F4F5;
    color: #52525A;
}
.close:hover{
    background-color: #d7d7db;

}
.search-input{
    width: 30rem;
}
.register-button{
    background-color: #DA3650;
}
.register-button:hover{
    background-color: #c2243d;
}
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
