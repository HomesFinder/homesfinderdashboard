
export class propData {
  constructor(
    public _id: String,
    public Developer:String,
    public reraNo: String,
    public postedBy: String,
    public buildFacing: String,
    public DeveloperName: String,
    public DeveloperBriefDetails: String,
    public ProjectName: String,
    public aboutProperty: String,
    public MuncipleCorporationName: String,
    public locationName: String,
    public connectivitytoProject: String,
    public landParcelInAcres: String,
    public builder_land:string,
    public constructionType: String,
    public possessionTimeline: String,
    public possessionMonthAndYear:String,
  
    
    public totalNumberOfUnits: Number,
    public ProjectOpenSpace: Number,
    public noOfTowers: Number,
    public noOfLifts: Number,
   
    public RefugeAreaFloors: String,
    public highriseCount: Number,
   
    public DGBackup: String,
    public rating: Number,
    public lattitude: String,
    public longitude: String,
    public youtubeUri: String,
    public Staircase: any[],
    public Amenities: any[],
    public imagesUri: any[],
    public bhkSpecific: any[],
    public propFeatures: any[],
    public imageToShow: any[],
    public AreasNearby: any[],
    public TypologyAvailable: any[],
    public Flat_Floor:any[]=[]
    
  ) {}
}
