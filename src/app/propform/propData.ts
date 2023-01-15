
export class propData {
  constructor(
    public _id: String,
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
    public totalNumberOfUnits: Number,
    public ProjectOpenSpace: Number,
    public noOfTowers: Number,
    public noOfLifts: Number,
   
    public RefugeAreaFloors: String,
    public highriseCount: Number,
    public Flat_Floor: String,
    public DGBackup: String,
    public rating: number,
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
    public TypologyAvailable: any[]
  ) {}
}
