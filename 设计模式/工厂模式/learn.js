// 手机:{部件:{品牌:{系列:{版本:{}}}}}
Mobile : {
  processer : {
    Huawi:{
      RY:{
        990,
        985
      };
      Note:{
        965,
        960
      }
    };
    Xiaomi:{
      Mi:{
        875,
        865
      };
      RedMi:{
        845,
        820
      }
    }
  };
  memory : {
    Huawi:{
      RY:{
        256,
        128
      };
      Note:{
        16,
        8
      }
    };
    Xiaomi:{
      Mi:{
        256,
        128
      };
      RedMi:{
        64,
        32
      }
    }
  }
}

let processerOrd = {
  store: 'Huawi',
  
}
const LPhone = new PhoneMaker('Huawi',)