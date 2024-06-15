<template>
    <div v-if="isLoading !== true" class="max-w-7xl mx-auto space-y-2 lg:mt-12 pb-12 mt-6">
        <table class="w-full text-xl mt-6">
            <thead class="text-xl uppercase">
            <tr>
                
                <th scope="col" class="px-1 text-center py-1">
                    Comp
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    Att
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    Yds
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    TD
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    INT
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    QB Rating
                </th>
                <!--  -->
                <th scope="col" class="px-1 text-center py-1">
                    Rush Att
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    Rush Yds
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    Y/A
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    TD
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    PPR
                </th>
                <th scope="col" class="px-1 text-center py-1">
                    PPR/G
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="player,index in insights" class="border-b">
                
                <td v-bind:id="stats.comp" :style="{'background-color': getBackgroundColor(player.comp, this.stats.comp)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.comp).toFixed(1) }}
                </td>
                <td v-bind:id="stats.att" :style="{'background-color': getBackgroundColor(player.att, this.stats.att)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.att).toFixed(1) }}
                </td>
                <td v-bind:id="stats.yds" :style="{'background-color': getBackgroundColor(player.yds, this.stats.yds)}"   class="px-1 text-center py-1">
                    {{ parseFloat(player.yds).toFixed(1) }}
                </td>
                <td v-bind:id="stats.tds" :style="{'background-color': getBackgroundColor(player.tds, this.stats.tds)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.tds).toFixed(1) }}
                </td>
                <td v-bind:id="stats.pass_int" :style="{'background-color': getBackgroundColor(player.ints, this.stats.ints)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.ints).toFixed(1) }}
                </td>
                <td v-bind:id="stats.rating" :style="{'background-color': getBackgroundColor(player.rating, this.stats.rating)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.rating).toFixed(1) }}
                </td>

                <td v-bind:id="stats.rush_att" :style="{'background-color': getBackgroundColor(player.rush_att, this.stats.rush_att)}" class="px-1 text-center py-1">
                    {{parseFloat(player.rush_att.toFixed(1))}}
                </td>
                <td v-bind:id="stats.rush_yds" :style="{'background-color': getBackgroundColor(player.rush_yds, this.stats.rush_yds)}"  class="px-1 text-center py-1">
                    {{parseFloat(player.rush_yds.toFixed(1))}}
                </td>
                <td v-bind:id="stats.rush_yds_per_att" :style="{'background-color': getBackgroundColor(player.rush_yds_per_att, this.stats.rush_yds_per_att)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.rush_yds_per_att).toFixed(1) }}
                </td>
                <td v-bind:id="stats.rush_td" :style="{'background-color': getBackgroundColor(player.rush_td, this.stats.rush_td)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.rush_td).toFixed(1) }}
                </td>
                <!--  -->

                <td v-bind:id="stats.ppr" :style="{'background-color': getBackgroundColor(player.ppr, this.stats.ppr)}" class="px-1 text-center py-1">
                    {{ parseFloat(player.ppr).toFixed(1) }}
                </td>
                <td v-bind:id="stats.ppr_per_gm" :style="{'background-color': getBackgroundColor(player.ppr_per_gm, this.stats.ppr_per_gm)}" class="px-1 text-center py-1">
                    {{ Math.round(player.ppr_per_gm * 10) / 10  }}
                </td>

            </tr>

            </tbody>
        </table>
        <div>
            <label for="default-search" class="mb-2 text-xl font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input v-model="searchValue" type="search" id="default-search" class=" p-2 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." required>
            </div>
        </div>
        <EasyDataTable
            :items="players"
            :headers="headers"
            v-model:items-selected="itemsSelected"
            :search-value="searchValue"
            :rows-per-page="20"
            :loading="isLoading"
            buttons-pagination
            show-index
            :sort-by="sortBy"
            :sort-type="sortType"
            theme-color="#C3B367"
        >
            <template #item-headshot="player">
                <div class="grid h-9">
                    <td class="place-self-center">
                        <img :src="player.headshot" class="h-9" :alt="player.name" />
                    </td>
                </div>
            </template>
            <template #item-name="player">
                <div>
                    <td>
                        <a :href="'http://www.google.com/search?q=' + encodeURIComponent(player.name)"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline">{{ player.name  }}</a>
                    </td>
                </div>
            </template>
            <template #item-age="player">
                <div>
                    <td>
                        {{ player.age  }}
                    </td>
                </div>
            </template>
            <template #item-g="player">
                <div class="grid">
                    <td class="place-self-center">{{ player.g  }}</td>
                </div>
            </template>
            <template #item-comp="player">
                <div v-bind:id="this.stats.comp" :style="{'background-color': this.getBackgroundColor(player.comp, this.stats.comp)}" class="grid h-9">
                    <td class="place-self-center" >{{ player.comp }}</td>
                </div>
            </template>
            <template #item-att="player">
                <div v-bind:id="this.stats.att" :style="{'background-color': this.getBackgroundColor(player.att, this.stats.att)}" class="grid h-9">
                    <td class="place-self-center" >{{ player.att }}</td>
                </div>
            </template>
            <template #item-yds="player">
                <div v-bind:id="this.stats.yds" :style="{'background-color': this.getBackgroundColor(player.yds, this.stats.yds)}" class="grid h-9">
                    <td class="place-self-center" >{{ player.yds }}</td>
                </div>
            </template>
        </EasyDataTable>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data() {
        return {
            players: [],
            isLoading: true,
            itemsSelected: [],
            searchValue: '',
            sortType: 'desc',
            sortBy: 'ppr',
            tier_1: "#9f8e3f",
            tier_2: "#b19e46",
            tier_3: "#d1c58c",
            tier_4: "#f3efe0",
            headers:[
                { text: "Player", value: "headshot" },
                { text: "Name", value: "name", sortable: true, },
                { text: "Games", value: "g", sortable: true, },
                { text: "Age", value: "age", sortable: true, },
                { text: "Debut", value: "debut", sortable: true, },
                { text: "Comp", value: "comp", sortable: true, },
                { text: "Att", value: "att", sortable: true, },
                { text: "Pass Yds", value: "yds", sortable: true, },
                 { text: "TD", value: "tds", sortable: true, },
                    { text: "INT", value: "ints", sortable: true, },
                    { text: "QBR", value: "qbr", sortable: true},
                    { text: "Rating", value: "rating", sortable: true},
                    // // Rushing
                    // { text: "Att", value: "rush_att", sortable: true, },
                    // { text: "Yds", value: "rush_yds", sortable: true, },
                    // { text: "Y/A", value: "rush_yds_per_att", sortable: true, },
                    // { text: "TD", value: "rush_td", sortable: true, },
                    // { text: "PPR", value: "fantasy_points_ppr", sortable: true, },
                    // { text: "PPR/G", value: "ppr_per_gm", sortable: true, },
                ],
            stats: {
                age: 'age',
                all_td: 'all_td',
                ppr: 'ppr',
                g: 'g',
                grade: 'grade',
                att: 'att',
                comp: 'comp',
                ints: 'ints',
                tds: 'tds',
                yds: 'yds',
                ppr_per_gm: 'ppr_per_gm',
                rating: 'rating',
                rec: 'rec',
                rec_td: 'rec_td',
                rec_yds: 'rec_yds',
                rec_yds_per_rec: 'rec_yds_per_rec',
                rush_att: 'rush_att',
                rush_td: 'rush_td',
                rush_yds: 'rush_yds',
                rush_yds_per_att: 'rush_yds_per_att',
                targets: 'targets',
                touches: 'touches',
                touches_per_gm: 'touches_per_gm',
            },
            // Copy and Paste from Colab
            insights: [
                {
                    age: 35,
                    all_td: 10.05,
                    ppr: 349.1,
                    g: 17,
                    grade: 0.95,
                    att: 600.6,
                    comp: 403.7,
                    ints: 16.35,
                    tds: 31.45,
                    yds: 4542.55,
                    ppr_per_gm: 20.83,
                    rating: 104.75,
                    rec: 1,
                    rec_td: 0,
                    rec_yds: 1.8,
                    rec_yds_per_rec: 1.8,
                    rush_att: 134.8,
                    rush_td: 10.05,
                    rush_yds: 628.4,
                    rush_yds_per_att: 5.69,
                    targets: 1,
                    touches: 134.8,
                    touches_per_gm: 9.24
                },
                {
                    age: 30.7,
                    all_td: 5,
                    ppr: 303.82,
                    g: 17,
                    grade: 0.85,
                    att: 579,
                    comp: 386.05,
                    ints: 14,
                    tds: 29,
                    yds: 4216.95,
                    ppr_per_gm: 18.73,
                    rating: 100.91,
                    rec: 1,
                    rec_td: 0,
                    rec_yds: 0,
                    rec_yds_per_rec: 0,
                    rush_att: 78.05,
                    rush_td: 5,
                    rush_yds: 400.2,
                    rush_yds_per_att: 5.47,
                    targets: 1,
                    touches: 78.05,
                    touches_per_gm: 5.65
                },
                {
                    age: 28,
                    all_td: 4,
                    ppr: 277.05,
                    g: 17,
                    grade: 0.75,
                    att: 561,
                    comp: 370.5,
                    ints: 12,
                    tds: 26.25,
                    yds: 4060,
                    ppr_per_gm: 18.32,
                    rating: 97.93,
                    rec: 0,
                    rec_td: 0,
                    rec_yds: 0,
                    rec_yds_per_rec: 0,
                    rush_att: 64,
                    rush_td: 4,
                    rush_yds: 282,
                    rush_yds_per_att: 5,
                    targets: 0,
                    touches: 64,
                    touches_per_gm: 4.45
                },
                {
                    age: 25.5,
                    all_td: 2,
                    ppr: 237.65,
                    g: 15,
                    grade: 0.5,
                    att: 473.5,
                    comp: 307.5,
                    ints: 9,
                    tds: 20.5,
                    yds: 3464.5,
                    ppr_per_gm: 16.17,
                    rating: 92.15,
                    rec: 0,
                    rec_td: 0,
                    rec_yds: 0,
                    rec_yds_per_rec: 0,
                    rush_att: 40.5,
                    rush_td: 2,
                    rush_yds: 180,
                    rush_yds_per_att: 4.22,
                    targets: 0,
                    touches: 41,
                    touches_per_gm: 3.05,
                }
            ]
        };
    },
    created(){
        axios.get('https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/statistics/byathlete?region=us&lang=en&contentorigin=espn&isqualified=false&page=1&limit=50&category=offense%3Apassing&sort=passing.passingYards%3Adesc') // Replace with your API endpoint
      .then(response => {
        
        // GET API Response
        let data = response.data;
        this.isLoading = false;
        
        // Store all the player data in an array
        let playerArray = []

        let athletes = data.athletes
        let player = athletes[0]
        // Loop over Players
        athletes.map(player => {
            // Create response object to use before pushing them into an array
            let playerObject = {}

            // Variables
            let playerInformation = player['athlete']
            let playerStats = player['categories']
                // Passing is index 1
            let stats = playerStats[1]['values']
            let rushingStats = playerStats[2]['values']
            let games = playerStats[0]['values'][0]
            let att = stats[1]
            let yds = stats[3]


            // Object
                // Passing
            playerObject.name = playerInformation['displayName']
            playerObject.age = playerInformation['age']
            playerObject.debut = playerInformation['debutYear']
            playerObject.headshot = playerInformation['headshot']['href']
            playerObject.g = parseInt(games)
            playerObject.pos = playerInformation['position']['abbreviation']
            playerObject.comp = parseInt(stats[0])
            playerObject.att = att
            playerObject.comp_pct = parseFloat(stats[2])
            playerObject.yds = yds
            playerObject.yds_per_att = yds/att
            playerObject.yds_per_gm = parseFloat(yds/games)
            playerObject.tds = stats[7]
            playerObject.ints = stats[8]
            playerObject.qbr = stats[13]
            playerObject.rating = stats[12]

                // Rushing
            playerObject.rush_att = rushingStats[0]
            playerObject.rush_yds = rushingStats[1]
            playerObject.rush_yds_per_att = rushingStats[2]
            playerObject.rush_tds = rushingStats[5]
            playerObject.rush_yds_per_gm = rushingStats[6]

            // Computations
            playerObject.ppr = (playerObject.yds * 0.04)+(playerObject.tds*4)-(playerObject.ints*2)+(playerObject.rush_yds*0.10)+(playerObject.rush_tds*6)
            playerObject.ppr_per_gm = playerObject.ppr /games
            // Push
            playerArray.push(playerObject)
        });
        this.players = playerArray
        console.log(playerArray[0])
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle errors appropriately (e.g., display an error message)
      });
    },
    methods: {
        getBackgroundColor(stat, pos) {
            if(pos != undefined){
                switch (true) {
                    case stat >= this.insights[0][pos]:
                        return this.tier_1;
                    case stat < this.insights[0][pos] && stat >= this.insights[1][pos]:
                        return this.tier_2;
                    case stat < this.insights[1][pos] && stat >= this.insights[2][pos]:
                        return this.tier_3;
                    case stat < this.insights[2][pos] && stat >= this.insights[3][pos]:
                        return this.tier_4;
                    default:
                        return '';
                }
            }
        },
    }
}
</script>