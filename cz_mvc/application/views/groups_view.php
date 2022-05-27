  <h2>Факультеты, институты</h2>
  <br>
  <div class="container " ng-app="demo" ng-controller="faculty">
  <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Физико-математический факультет(ФМФ)
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><a class="btn btn-primary" href="403.html" role="button" id="get-users">403</a><div id="result"></div>
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Биолого-химический факультет(БХФ)
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Историко-филологический факультет(ИИФ)
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
  <div class="accordion mb-2" id="iiyams">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingIiyams">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    Институт иностранных языков и международного сотрудничества (ИИЯМС)
                </button>
            </h2>
            <div id="collapse2" class="accordion-collapse collapse " aria-labelledby="headingIiyams"
                 data-bs-parent="#iiyams">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="col-sm-12 p-2">Курс 1</div>
                            <div class="list-group p-1 "
                                 ng-repeat="item in groups_google | filter: {fakultet: 'ИИЯМС'}:true | filter: {course: '1'}:true | orderBy: 'gruppa' ">
                                <a href="/group/?{{item.gruppa}}" class="list-group-item ">{{item.gruppa}}</a>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="col-sm-12 p-2">Курс 2</div>
                            <div class="list-group p-1  my-list-group"
                                 ng-repeat="item in groups_google | filter: {fakultet: 'ИИЯМС'}:true | filter: {course: '2'}:true | orderBy: 'gruppa'">
                                <a href="/group/?{{item.gruppa}}" class="list-group-item ">{{item.gruppa}}</a>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="col-sm-12 p-2">Курс 3</div>
                            <div class="list-group p-1  my-list-group"
                                 ng-repeat="item in groups_google | filter: {fakultet: 'ИИЯМС'}:true | filter: {course: '3'}:true | orderBy: 'gruppa'">
                                <a href="/group/?{{item.gruppa}}" class="list-group-item ">{{item.gruppa}}</a>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="col-sm-12 p-2">Курс 4</div>
                            <div class="list-group p-1  my-list-group"
                                 ng-repeat="item in groups_google | filter: {fakultet: 'ИИЯМС'}:true | filter: {course: '4'}:true | orderBy: 'gruppa'">
                                <a href="/group/?{{item.gruppa}}" class="list-group-item ">{{item.gruppa}}</a>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="col-sm-12 p-2" ng-repeat="item in groups_google | filter: {course: '5'}:true | limitTo: 1">Курс 5</div>
                            <div class="list-group p-1  my-list-group"
                                 ng-repeat="item in groups_google | filter: {fakultet: 'ИИЯМС'}:true | filter: {course: '5'}:true | orderBy: 'gruppa'">
                                <a href="/group/?{{item.gruppa}}" class="list-group-item ">{{item.gruppa}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>