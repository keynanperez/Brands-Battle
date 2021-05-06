
import Questions from "./Questions"
    getQ=async()=>{
      const currentBrands=await getallbrands()
      await getallqustions()
    }
    getallbrands=()=>{
        return [adidas,zara,nike]

    }

    getallqustions=()=>{
        const i=0;
        var arryQuestions=Questions;
        var prevQ=""
        var endQ=""
        var chosenbrand=""
        
        while (i<=10)
        {
            var randomNumberB = Math.floor(Math.random() * (this.state.currentBrands.length)) + 1;
            var randomNumberQ = Math.floor(Math.random() * 4) + 1;
            chosenbrand=this.state.currentBrands[randomNumberB];
           prevQ= arryQuestions[randomNumberQ].prev;
           endQ=arryQuestions[randomNumberQ].end;
           var fuuQ= prevQ+chosenbrand+endQ;
           arryQuestions.push(fuuQ);

        }
        return arryQuestions;

    };
  