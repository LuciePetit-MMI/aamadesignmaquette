<template>
    <div>
        <main class="px-5 laptop:px-20 mt-24">
        
        <div class="panier">
            <div v-if="step==='1'" class="panier_items">
                <div class="w-full">
                    <h2 class="h2 mb-1">Récapitulatif panier 1/4</h2>
                    <div class="w-1/4 h-1 bg-marine"></div>
                </div>
                <div v-if="$store.state.cart.length">
                    <div v-for="(product, index) in $store.state.cart" :key="index">
                        <ProductCart :id="product.id" :name="product.name" :price="product.price" :images="product.images" :quantity="product.quantity" :dimensions="product.dimensions" :description="product.description"></ProductCart>
                    </div>
                </div>
                
                <div v-else>
                    <p>Votre panier est vide, <RouterLink to="/Ciluzio" class="underline text-orange">créez votre lampe dès maintenant</RouterLink></p>
                </div>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button :link="'/ciluzio'" :secondary="true">Continuer mes achats</Button>
                    <Button @click="step='2'" :svg="true" class="laptop:ml-4">Suivant</Button>
                </div>
            </div>
            <div v-if="step==='2'" class="panier_adresse_form">
                <div class="w-full">
                    <h2 class="h2 mb-1">Adresse de livraison 2/4</h2>
                    <div class="w-2/4 h-1 bg-marine"></div>
                </div>
                <form action="">
                    <div class="order-view__shipping flex flex-col">
                        <label for="" class="text-marine font-bold">Nom Prénom</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1">
                        <label for="" class="text-marine font-bold">Rue</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1">
                        <label for="" class="text-marine font-bold">Complément d'adresse</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1">
                        <div class="flex flex-col laptop:flex-row laptop:justify-between">
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Code postal</label>
                                <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                            </div>
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Ville</label>
                                <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                            </div>
                        </div>
                        <label for="" class="text-marine font-bold">Pays</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                        <div class="flex flex-row items-baseline">
                            <input type="checkbox" id="other-address" v-model="otherAddress">
                            <label for="other-address">Utiliser une adresse de facturation différente</label>
                        </div>
                    </div>
                    <div class="order-view__shipping flex flex-col" v-if="otherAddress">
                        <label for="" class="text-marine font-bold">Nom Prénom</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1">
                        <label for="" class="text-marine font-bold">Rue</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1">
                        <label for="" class="text-marine font-bold">Complément d'adresse</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1">
                        <div class="flex flex-col laptop:flex-row laptop:justify-between">
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Code postal</label>
                                <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                            </div>
                            <div class="flex flex-col laptop:w-1/2">
                                <label for="" class="text-marine font-bold">Ville</label>
                                <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                            </div>
                        </div>
                        <label for="" class="text-marine font-bold">Pays</label>
                        <input type="text" placeholder="Lorem Ipsum" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                    </div>
                </form>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button @click="step='1'" :secondary="true">Précédent</Button>
                    <Button @click="step='3'" :svg="true" class="laptop:ml-4">Suivant</Button>
                </div>
            </div>
            <div v-if="step==='3'" class="panier_livraison_items">
                <div class="w-full">
                    <h2 class="h2 mb-1">Mode de livraison 3/4</h2>
                    <div class="w-3/4 h-1 bg-marine"></div>
                </div>
                <div class="border-b-2 h-fit border-black">
                    <div>
                        <div class="flex flex-row justify-between items-baseline">
                            <p class="h3 mb-2">Mode de livraison</p>
                            <input type="radio" class="">
                        </div>
                        <div class="flex flex-row">
                            <p class="text-sm mr-20">Colissimo <br/>2 à 5 jours ouvrés</p>
                            <p>8.99 €</p>  
                        </div>
                    </div>    
                </div>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button @click="step='2'" :secondary="true">Précédent</Button>
                    <Button @click="step='4'" :svg="true" class="laptop:ml-4">Suivant</Button>
                </div>
            </div>
            <div v-if="step==='4'" class="panier_adresse_form">
                <div class="w-full">
                    <h2 class="h2 mb-1">Paiement 4/4</h2>
                    <div class="w-4/4 h-1 bg-marine"></div>
                </div>
                <form action="" class="flex flex-col">
                    <label for="" class="text-marine font-bold">Titulaire de la carte</label>
                    <input type="text" placeholder="Nom Prénom" class="border-2 border-marine rounded-lg px-2 py-1">
                    <label for="" class="text-marine font-bold">Numéro de la carte</label>
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX XXXX" class="border-2 border-marine rounded-lg px-2 py-1">
                    <div class="flex flex-col laptop:flex-row laptop:justify-between">
                        <div class="flex flex-col laptop:w-1/2">
                            <label for="" class="text-marine font-bold">Date d'éxpiration</label>
                            <input type="text" placeholder="11/12" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">    
                        </div>
                        <div class="flex flex-col laptop:w-1/2">
                            <label for="" class="text-marine font-bold">Cryptogramme visuel</label>
                            <input type="text" placeholder="XXX" class="border-2 border-marine rounded-lg px-2 py-1 laptop:w-fit">
                        </div>
                    </div>
                </form>
                <div class="flex flex-row justify-between laptop:justify-end">
                    <Button @click="step='3'" :secondary="true">Précédent</Button>
                    <Button :svg="true" class="laptop:ml-4">Valider</Button>
                </div>
            </div>
            <div class="recap fixed -ml-5 p-10 bg-marine flex flex-col justify-between laptop:static laptop:m-10 laptop:h-[60vh]">
                <div>
                    <h4 class="h4 m-0 text-white">Récapitulatif</h4>
                    <p class="font-bold text-white mb-0 mt-4">Produits</p>
                    <div v-for="(product, index) in $store.state.cart" :key="index" class="flex flex-row justify-between">
                        <p class="text-white text-sm my-1">{{product.quantity}} x {{product.name}}</p>
                        <p class="text-white text-sm my-1">{{product.price}} €</p>
                    </div>
                </div>
                <div>
                    <div class="flex flex-row justify-between">
                        <p class="text-white font-bold">Total panier</p>
                        <p class="text-white font-bold">{{cartTotal}} €</p>    
                    </div>
                </div>
            </div>
        </div>
    </main>

    </div>
</template>

<script>
import Button from '@/components/Buttons.vue';
import ProductCart from '@/components/ProductCart.vue';

export default{
    components: { Button, ProductCart, },
    data(){
        return{
            step: '1',
            otherAddress: false,
        }
    },
    computed:{
        cartTotal() {
            return this.$store.state.cart.reduce((total, product) => {
                total += product.price * product.quantity;
                return total;
            }, 0);
        },
    }
}
</script>
