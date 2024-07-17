<script>
    import Header from "../components/cardscomp/header.svelte";
    import Information from "../components/cardscomp/information.svelte";
    import Skills from "../components/cardscomp/skills.svelte";
    import Education from "./cardscomp/education.svelte";
    import Exp from "./cardscomp/exp.svelte";
    export let data;

</script>

    <div class="card flex flex-col rounded-[15px] max-w-[282px] w-full h-[229px] bg-white hover:shadow-lg shadow">
        <Header name={data}/>
        <div class="info flex flex-row w-full h-full justify-center">
            <div class="infoleft flex flex-col w-full justify-start  items-center p-1">
                <Information name={data}/>
                <Exp/>

            </div>
            <div class="inforight flex flex-col w-full justify-start  items-center p-1">
                <Skills/>
                <Education/>
            </div>

        </div>
    </div>