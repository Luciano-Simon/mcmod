function attackHook(attacker, victim){
    //攻击者是玩家
    if(attacker==63){
        //阻止默认操作
        preventDefault();
        //固定所攻击生物
        dismove(victim);
        //根据victim设定手持物品
        setEnchant(attacker, victim);
        }
    }

function setEnchant(attacker, victim){
    switch(victim){
        //玩家和照相机
        case 0:Entity.setCarriedItem(attacker, id0);break;
        //鸡
        case 10:Entity.setCarriedItem(attacker, id10);break;
        //牛
        case 11:Entity.setCarriedItem(attacker, id11);break;
        //猪
        case 12:Entity.setCarriedItem(attacker, id12);break;
        //羊
        case 13:Entity.setCarriedItem(attacker, id13);break;
        //狼
        case 14:Entity.setCarriedItem(attacker, id14);break;
        //村民
        case 15:Entity.setCarriedItem(attacker, id15);break;
        //哞菇
        case 16:Entity.setCarriedItem(attacker, id16);break;
        //僵尸
        case 32:Entity.setCarriedItem(attacker, id32);break;
        //爬行者
        case 33:Entity.setCarriedItem(attacker, id33);break;
        //骷髅
        case 34:Entity.setCarriedItem(attacker, id34);break;
        //蜘蛛
        case 35:Entity.setCarriedItem(attacker, id35);break;
        //僵尸猪人
        case 36:Entity.setCarriedItem(attacker, id36);break;
        //史莱姆
        case 37:Entity.setCarriedItem(attacker, id37);break;
        //末影人
        case 38:Entity.setCarriedItem(attacker, id38);break;
        //蠹虫
        case 39:Entity.setCarriedItem(attacker, id39);break;
        //玩家
        case 63:Entity.setCarriedItem(attacker, id63);break;
        //掉落物
        case 64:Entity.setCarriedItem(attacker, id64);break;
        //激活的TNT
        case 65:Entity.setCarriedItem(attacker, id65);break;
        //掉落的沙
        case 66:Entity.setCarriedItem(attacker, id66);break;
        //射出的箭
        case 80:Entity.setCarriedItem(attacker, id80);break;
        //扔出的雪球
        case 81:Entity.setCarriedItem(attacker, id81);break;
        //扔出的鸡蛋
        case 82:Entity.setCarriedItem(attacker, id82);break;
        //画
        case 83:Entity.setCarriedItem(attacker, id83);break;
        //矿车
        case 84:Entity.setCarriedItem(attacker, id84);break;
        }
    }
