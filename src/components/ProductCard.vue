<template>
    <div>
        <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
            <div class="flex flex-col">
                <div :class="{'hidden': !inspiration, 'block': inspiration }">
                    <p class="text-white mb-2">Création de Lorem Ipsum</p>
                    <p class="text-white text-sm">Medio</p>
                </div>
                <p :class="{'hidden': inspiration, 'block': !inspiration }" class="text-white">Modèle</p>
            </div>
            <div class="flex flex-row justify-between w-full items-baseline">
                <p :class="{'hidden': inspiration, 'block': !inspiration }" class="font-bold text-white">Prix €€€</p>
                <Button :class="{'hidden': !inspiration, 'block': inspiration }" :secondary="true">Modifier</Button>
                <Button :svg="true">Acheter</Button>
            </div>
        </div>  
        <div class="relative -z-10">
            <img src="../assets/images/product_card.svg" alt="">
            <img src="../assets/images/product_image.png" alt="" class="absolute top-0 left-0">
        </div>
        <div :class="{'hidden': !inspiration, 'block': inspiration }" class="inspi_card__colors">
            <svg width="20" height="20">
                <circle cx="10" cy="10" r="8" stroke="black" fill="white" stroke-width="4"/>
            </svg>
            <svg width="20" height="20">
                <circle cx="10" cy="10" r="8" stroke="black" fill="white" stroke-width="4"/>
            </svg>
            <svg width="20" height="20">
                <circle cx="10" cy="10" r="8" stroke="black" fill="white" stroke-width="4"/>
            </svg>
            <svg width="20" height="20">
                <circle cx="10" cy="10" r="8" stroke="black" fill="white" stroke-width="4"/>
            </svg>
            <svg width="20" height="20">
                <circle cx="10" cy="10" r="8" stroke="black" fill="white" stroke-width="4"/>
            </svg>
            <svg width="20" height="20">
                <circle cx="10" cy="10" r="8" stroke="black" fill="white" stroke-width="4"/>
            </svg>
            <svg width="20" height="20">
                <circle cx="10" cy="10" r="8" stroke="black" fill="white" stroke-width="4"/>
            </svg>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Buttons.vue';

export default {
    components: { Button },
    props: {
        inspiration:{
            type: Boolean, 
            default: false,
        },
    }
};
</script>

<style>
.hidden{
    display: hidden;
}

.block{
    display: block;
}

</style>