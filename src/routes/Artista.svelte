<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
let data = [{
  "biography": "Arnold Alois Schwarzenegger (born July 30, 1947) is an Austrian-American actor, film producer, businessman, former bodybuilder and politician who served as the 38th governor of California (2003-2011). As of 2022, he is the most recent Republican governor of California. Time magazine named Schwarzenegger one of the 100 most influential people in the world in 2004 and 2007. He also served as ...",
  "birthday": "1947-07-30",
  "gender": 2,
  "id": 1100,
  "known_for_department": "Acting",
  "name": "Arnold Schwarzenegger",
  "place_of_birth": "Thal, Styria, Austria",
  "popularity": 26.296,
  "profile_path": "/zEMhugsgXIpnQqO31GpAJYMUZZ1.jpg"
},{
  "biography": "Arnold Alois Schwarzenegger (born July 30, 1947) is an Austrian-American actor, film producer, businessman, former bodybuilder and politician who served as the 38th governor of California (2003-2011). As of 2022, he is the most recent Republican governor of California. Time magazine named Schwarzenegger one of the 100 most influential people in the world in 2004 and 2007. He also served as ...",
  "birthday": "1947-07-30",
  "gender": 2,
  "id": 1100,
  "known_for_department": "Acting",
  "name": "Arnold Schwarzenegger",
  "place_of_birth": "Thal, Styria, Austria",
  "popularity": 26.296,
  "profile_path": "/zEMhugsgXIpnQqO31GpAJYMUZZ1.jpg"
},
{
  "biography": "Arnold Alois Schwarzenegger (born July 30, 1947) is an Austrian-American actor, film producer, businessman, former bodybuilder and politician who served as the 38th governor of California (2003-2011). As of 2022, he is the most recent Republican governor of California. Time magazine named Schwarzenegger one of the 100 most influential people in the world in 2004 and 2007. He also served as ...",
  "birthday": "1947-07-30",
  "gender": 2,
  "id": 1100,
  "known_for_department": "Acting",
  "name": "Arnold Schwarzenegger",
  "place_of_birth": "Thal, Styria, Austria",
  "popularity": 26.296,
  "profile_path": "/zEMhugsgXIpnQqO31GpAJYMUZZ1.jpg"
}];
</script>
<Accordion>
{#each data as artista}
  <AccordionItem>
    <span slot="header">{artista.name}</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">{artista.biography}</p>
  </AccordionItem>
{/each}
</Accordion>