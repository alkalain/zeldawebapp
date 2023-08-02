<!-- 
    TODO :
    - correct the extending button
    - correct gradient on elipse
    - corect with
 -->
<script>
import JobSantuary from "./icons/IconJobSantuary.vue";
import QuestItemPanel from "./panels/QuestItemPanel.vue";
import ButtonToggle from "./ButtonToggle.vue";

export default {
  components: {
    JobSantuary,
    QuestItemPanel,
    ButtonToggle,
  },
  data() {
    return {
      questID: 0,

      showAlert: () => {
        alert("test");
      },
      
      quests: [
        {
          post: "Maîtr Ux Ui",
          company: "SheikahTech Solutions",
          message:
            "Nous cherchons un maître Hylien de l'UX/UI, prêt à mener notre équipe vers des horizons créatifs inexplorés. Vous aurez pour mission de diriger la quête de conception, de façonner des interfaces magistrales et de guider nos designers vers la gloire du design. Si vous êtes prêt à dégainer votre baguette magique du design, postulez maintenant et rejoignez notre royaume enchanté !",
          show: false,
          id: 1,
        },
        {
          post: "Chevalier développeur d'applications",
          company: "Hyrule Design Co.",
          message:
            "En tant que Chevalier développeur d'applications, forgez des interfaces épiques et des fonctionnalités magistrales pour créer des expériences utilisateur dignes des légendes de Zelda. Rejoignez notre équipe de héros du code dès maintenant !",
          show: false,
          id: 2,
        },
        {
          post: "Alchimiste du code",
          company: "Zora Agency",
          message:
            "En tant qu'Alchimiste du code, votre art consiste à transformer des lignes de code en potions magiques d'applications. Expérimentez, mélangez et créez des formules innovantes pour générer des solutions technologiques étonnantes. Utilisez votre savoir-faire alchimique pour transmuter les défis en opportunités. Rejoignez notre guilde d'alchimistes du code et devenez un maître de la transformation numérique.",
          show: false,
          id: 3,
        },
        {
          post: "Gardien des réseaux sécurisés",
          company: "Rito Interactive Design",
          message:
            "En tant que Gardien des réseaux sécurisés, défendez notre royaume numérique contre les menaces maléfiques, surveillez les remparts virtuels et préservez l'intégrité de nos données précieuses. Rejoignez notre équipe de gardiens experts en sécurité dès maintenant pour protéger notre royaume numérique.",
          show: false,
          id: 4,
        },
        {
          post: "Maître forgeron",
          company: "Korok Pixel Artworks",
          message:
            "En tant que Maître forgeron, créez des armes légendaires et des artefacts technologiques, forgez la puissance et l'innovation dans notre équipe.",
          show: false,
          id: 5,
        },
        {
          post: "Chasseur de trésors numériques",
          company: "Goron User Experience Ltd.",
          message:
            "En tant que Chasseur de trésors numériques, partez à l'aventure dans les recoins virtuels, dénichez des joyaux d'informations et des découvertes cachées pour nourrir notre savoir technologique. Joignez notre équipe de chercheurs passionnés et embarquez pour des expéditions numériques inoubliables.",
          show: false,
          id: 6,
        },
        {
          post: "Sorcier de la cybersécurité",
          company: "Ancient Sheikah Designs",
          message:
            "En tant que Sorcier de la cybersécurité, utilisez des sorts de protection et des enchantements puissants pour conjurer les menaces numériques et protéger notre royaume numérique des forces malveillantes. Joignez notre ordre de sorciers experts en cybersécurité pour défendre notre monde digital contre les ténèbres.",
          show: false,
          id: 7,
        },
        {
          post: "Créateur de contenu",
          company: "Master Sword Design Agency",
          message:
            "En tant que Créateur de contenu, donnez vie à des récits épiques, des guides enchantés et des vidéos ensorcelantes pour divertir et informer notre communauté. Utilisez votre plume magique et votre esprit créatif pour captiver les esprits et inspirer l'aventure. Rejoignez notre équipe de créateurs passionnés et partagez votre magie avec le monde.",
          show: false,
          id: 8,
        },
      ],
      users: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wbnBqQtZnz-yK37MmQVO2JzjoYH1vrRQtQ&usqp=CAU",
          UserName: "Link",
          Postulation: [],
          id: 1,
        },
      ],
    };
  },
  methods: {
    showMsg(QID) {
      const index = this.quests.findIndex((quest) => quest.id === QID);
      if (index !== -1) {
        this.quests[index].show = !this.quests[index].show;
      }
    },
    postulate(QID,userID) {
      const UID = this.users.findIndex((user) => this.users.id===userID);
      const index = this.quests.findIndex((quest) => quest.id === QID);
      this.users[UID].Postulation =
        "company: " +
        this.quests[index].company +
        ", post: " +
        this.quests[index].post +
        ", QuestID: " +
        this.quests[index].id;
    },
  },
};
</script>
<template>
  <ul>
    <li
      class="w-full flex justify-center p-2"
      v-for="quest in quests"
      :key="quest.id"
    >
      <quest-item-panel>
        <template #logo>
          <JobSantuary />
        </template>
        <template #theText>
          <h1 class="italic font-bold text-xl leading-5 text-white">
            {{ quest.post }}
          </h1>
          <h3 class="italic font-bold text-base leading-4 text-blue-400">
            {{ quest.company }}
          </h3>
          <div
            class="pt-2 text-sm italic order-1 text-white opacity-50"
            v-show="quest.show"
          >
            <p>{{ quest.message }}</p>
            <button-toggle @toggle="postulate(quest.id,users.id)"
              ><div
                class="w-[237px] h-14 relative bg-gradient-to-b from-black to-black rounded-lg"
              >
                <div
                  class="w-[231px] h-[50px] left-[3px] top-[3px] absolute bg-black bg-opacity-0 rounded-md border-2 border-white border-opacity-20 backdrop-blur-2xl hover:border-teal-400 "
                ></div>
                <div
                  class="left-[86px] top-[17px] absolute text-center text-white text-opacity-75 text-[17px] font-medium"
                >
                  Postuler
                </div>
              </div></button-toggle
            >
          </div>
        </template>
        <template #elipse>
          <button-toggle
            @toggle="showMsg(quest.id)"
            class="bg-white mix-blend-overlay rounded-md flex justify-center items-center h-[90%] w-[75%]"
          >
            <slot>
              <span class="bg-black w-[6px] h-[6px] rounded-[100%]"> </span>
            </slot>
          </button-toggle>
        </template>
      </quest-item-panel>
    </li>
  </ul>
</template>
