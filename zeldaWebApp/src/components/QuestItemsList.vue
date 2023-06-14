<script>
import JobSantuary from './icons/IconJobSantuary.vue';
import QuestItem from './panels/QuestItemPanel.vue';
export default{
    components:{
        JobSantuary,
        QuestItem
    },
    data(){
        return{
            msg:false,
            showAlert: () => {
    alert('test')
  },
            quests:[
                {
                    post:"Maîtr Ux Ui",
                    company:"SheikahTech Soulutions",
                    message:"Nous cherchons un maître Hylien de l'UX/UI, prêt à mener notre équipe vers des horizons créatifs inexplorés. Vous aurez pour mission de diriger la quête de conception, de façonner des interfaces magistrales et de guider nos designers vers la gloire du design. Si vous êtes prêt à dégainer votre baguette magique du design, postulez maintenant et rejoignez notre royaume enchanté !",
                    id:1
                },
                {
                    post:"Chevalier développeur d'applications",
                    company:"Hyrule Design Co.",
                    message:"En tant que Chevalier développeur d'applications, forgez des interfaces épiques et des fonctionnalités magistrales pour créer des expériences utilisateur dignes des légendes de Zelda. Rejoignez notre équipe de héros du code dès maintenant !",
                    id:2
                },
                {
                    post:"Alchimiste du code",
                    company:"Zora Agency",
                    message:"En tant qu'Alchimiste du code, votre art consiste à transformer des lignes de code en potions magiques d'applications. Expérimentez, mélangez et créez des formules innovantes pour générer des solutions technologiques étonnantes. Utilisez votre savoir-faire alchimique pour transmuter les défis en opportunités. Rejoignez notre guilde d'alchimistes du code et devenez un maître de la transformation numérique.",
                    id:3
                },
                {
                    post:"Gardien des réseaux sécurisés",
                    company:"Rito Interactive Design",
                    message:"En tant que Gardien des réseaux sécurisés, défendez notre royaume numérique contre les menaces maléfiques, surveillez les remparts virtuels et préservez l'intégrité de nos données précieuses. Rejoignez notre équipe de gardiens experts en sécurité dès maintenant pour protéger notre royaume numérique.",
                    id:4
                },
                {
                    post:"Maître forgeron",
                    company:"Korok Pixel Artworks",
                    message:"En tant que Maître forgeron, créez des armes légendaires et des artefacts technologiques, forgez la puissance et l'innovation dans notre équipe.",
                    id:5
                },
                {
                    post:"Chasseur de trésors numériques",
                    company:"Goron User Experience Ltd.",
                    message:"En tant que Chasseur de trésors numériques, partez à l'aventure dans les recoins virtuels, dénichez des joyaux d'informations et des découvertes cachées pour nourrir notre savoir technologique. Joignez notre équipe de chercheurs passionnés et embarquez pour des expéditions numériques inoubliables.",
                    id:6
                },
                {
                    post:"Sorcier de la cybersécurité",
                    company:"Ancient Sheikah Designs",
                    message:"En tant que Sorcier de la cybersécurité, utilisez des sorts de protection et des enchantements puissants pour conjurer les menaces numériques et protéger notre royaume numérique des forces malveillantes. Joignez notre ordre de sorciers experts en cybersécurité pour défendre notre monde digital contre les ténèbres.",
                    id:7
                },
                {
                    post:"Créateur de contenu",
                    company:"Master Sword Design Agency",
                    message:"En tant que Créateur de contenu, donnez vie à des récits épiques, des guides enchantés et des vidéos ensorcelantes pour divertir et informer notre communauté. Utilisez votre plume magique et votre esprit créatif pour captiver les esprits et inspirer l'aventure. Rejoignez notre équipe de créateurs passionnés et partagez votre magie avec le monde.",
                    id:8
                },
            ]
        }
    }
}

</script>
<template>
        <div >
            <div class="w-full  flex justify-center p-2" v-for="quest in quests" :key=quest.id>
                        <quest-item>
                            <template #logo>
                                    <JobSantuary/>
                            </template>
                            <template #theText>
                                    <h1 class="italic font-bold text-xl leading-5 text-white ">{{ quest.post }}</h1>
                                    <h3 class="italic font-bold text-base leading-4 text-blue-400">{{ quest.company }}</h3>
                                    <p class="pt-2 text-sm italic order-1 text-white opacity-50 " 
                                    v-show="msg" >{{ quest.message }}</p>
                                    
                            </template>
                            <template #elipse>
                                <!-- <button @click="msg=!msg">show</button> -->
                            </template>
                        </quest-item>
            </div>
        </div>
</template>