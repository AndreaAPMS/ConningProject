export class truewind
{
    public twd: number;
    public tws: number;
    public twa: number;
}
export class nmea
{
    ID : number;
    source : string;
    data : fields;
    timestamp: string ;
}

class fields 
{
    HDT : HDT_field;
    MWV : MWV_field;
    VTG : VTG_field;
    RMC : RMC_field;
    DPT : DPT_field;
    GLL : GLL_field;
}
class GLL_field
{
    sentence: string;
    lat: string;
    latPole: string;
    lon: string;
    lonPole: string;
}
class DPT_field
{
    sentence: string;
    SounderDepth: number;
}
class RMC_field
{
    sentence : string;
    speedKnots : number;
}
class HDT_field
{
    sentence : string ;
    heading : number;
}
class MWV_field
{
    sentence : string;
    angle : number;
    speed: number;
    reference : string;
}
class VTG_field
{
    sentence : string;
    speedKnots: number;
}
export class shipstatus
{
    name: string;
    imo: number;
    heading: number;
    sog: number;
    stw: number;
    awa: number;
    aws: number;
    twa: number;
    twd: number;
    tws: number;
    dpt: number;
    lat: number;
    latpole: string;
    lon: number;
    lonpole: string;
}
