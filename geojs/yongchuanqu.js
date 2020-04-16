(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    //此处用json数据注册地图
    echarts.registerMap('永川区',{
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {
                "adcode": 500118,
                "name": "永川区",
                "center": [105.894714, 29.348748],
                "centroid": [105.872859, 29.290183],
                "childrenNum": 0,
                "level": "district",
                "acroutes": [100000, 500000],
                "parent": {
                    "adcode": 500000
                }
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [105.762293, 29.017048],
                            [105.7608, 29.017239],
                            [105.76187, 29.01948],
                            [105.760056, 29.020211],
                            [105.758352, 29.021752],
                            [105.756589, 29.022235],
                            [105.755735, 29.02347],
                            [105.754077, 29.024126],
                            [105.753792, 29.026379],
                            [105.752001, 29.028224],
                            [105.752015, 29.029465],
                            [105.751055, 29.03007],
                            [105.749636, 29.029987],
                            [105.750637, 29.03168],
                            [105.750527, 29.033615],
                            [105.748772, 29.033996],
                            [105.747316, 29.033519],
                            [105.745365, 29.034569],
                            [105.746623, 29.035072],
                            [105.747541, 29.036147],
                            [105.746334, 29.036797],
                            [105.747574, 29.037853],
                            [105.746458, 29.038648],
                            [105.744501, 29.038375],
                            [105.74373, 29.039603],
                            [105.742453, 29.038788],
                            [105.741801, 29.039501],
                            [105.742885, 29.040627],
                            [105.743077, 29.041906],
                            [105.744602, 29.043605],
                            [105.74677, 29.043574],
                            [105.745815, 29.045368],
                            [105.744643, 29.045839],
                            [105.744607, 29.046622],
                            [105.746605, 29.048104],
                            [105.748129, 29.04853],
                            [105.749149, 29.050299],
                            [105.75083, 29.050878],
                            [105.752083, 29.052259],
                            [105.750609, 29.053748],
                            [105.751716, 29.056197],
                            [105.753291, 29.058482],
                            [105.754118, 29.061332],
                            [105.754614, 29.062013],
                            [105.754178, 29.063266],
                            [105.755725, 29.063756],
                            [105.756975, 29.066103],
                            [105.757778, 29.066237],
                            [105.757801, 29.069023],
                            [105.756713, 29.071384],
                            [105.755771, 29.071994],
                            [105.75049, 29.072751],
                            [105.747362, 29.073922],
                            [105.74502, 29.075455],
                            [105.743619, 29.078235],
                            [105.742535, 29.081142],
                            [105.742099, 29.085709],
                            [105.740859, 29.088622],
                            [105.739293, 29.090562],
                            [105.736634, 29.093068],
                            [105.732873, 29.095993],
                            [105.729901, 29.098773],
                            [105.728882, 29.101622],
                            [105.72902, 29.106156],
                            [105.729272, 29.107727],
                            [105.730866, 29.112185],
                            [105.732326, 29.118124],
                            [105.735183, 29.122403],
                            [105.739936, 29.12487],
                            [105.747826, 29.127458],
                            [105.752102, 29.129785],
                            [105.752286, 29.133383],
                            [105.750416, 29.135742],
                            [105.747114, 29.13756],
                            [105.744754, 29.137846],
                            [105.742857, 29.137579],
                            [105.736827, 29.1318],
                            [105.733203, 29.130986],
                            [105.730691, 29.132245],
                            [105.72885, 29.134413],
                            [105.729456, 29.140402],
                            [105.731027, 29.145716],
                            [105.730457, 29.14695],
                            [105.729079, 29.147001],
                            [105.727683, 29.147751],
                            [105.727835, 29.148869],
                            [105.729382, 29.152156],
                            [105.729355, 29.152944],
                            [105.727954, 29.15419],
                            [105.728818, 29.155709],
                            [105.727421, 29.158201],
                            [105.724886, 29.16176],
                            [105.721345, 29.169546],
                            [105.720303, 29.171344],
                            [105.718163, 29.173276],
                            [105.715788, 29.173848],
                            [105.711747, 29.172965],
                            [105.708799, 29.173537],
                            [105.705786, 29.174732],
                            [105.70444, 29.175691],
                            [105.703839, 29.176981],
                            [105.704082, 29.179695],
                            [105.706681, 29.183902],
                            [105.706456, 29.190034],
                            [105.706681, 29.193478],
                            [105.706268, 29.198484],
                            [105.704509, 29.20243],
                            [105.705919, 29.204177],
                            [105.707738, 29.207151],
                            [105.709575, 29.211706],
                            [105.71199, 29.218903],
                            [105.710897, 29.220059],
                            [105.708408, 29.220155],
                            [105.706874, 29.221342],
                            [105.705859, 29.223769],
                            [105.706911, 29.226405],
                            [105.70765, 29.231194],
                            [105.708886, 29.238003],
                            [105.702658, 29.248463],
                            [105.698603, 29.257048],
                            [105.693942, 29.267583],
                            [105.692715, 29.273392],
                            [105.692279, 29.279068],
                            [105.693253, 29.283766],
                            [105.695177, 29.287359],
                            [105.69977, 29.288724],
                            [105.707513, 29.28939],
                            [105.715899, 29.290876],
                            [105.716868, 29.292945],
                            [105.715467, 29.29558],
                            [105.71042, 29.297262],
                            [105.70506, 29.299217],
                            [105.701101, 29.298265],
                            [105.695397, 29.295929],
                            [105.689836, 29.291936],
                            [105.686327, 29.288216],
                            [105.683461, 29.284629],
                            [105.682028, 29.28242],
                            [105.681532, 29.280071],
                            [105.682047, 29.278643],
                            [105.681418, 29.277328],
                            [105.682244, 29.275868],
                            [105.681794, 29.274852],
                            [105.67806, 29.273475],
                            [105.675838, 29.273919],
                            [105.672784, 29.27376],
                            [105.668999, 29.274484],
                            [105.666795, 29.275437],
                            [105.66476, 29.276909],
                            [105.657536, 29.282591],
                            [105.655676, 29.284432],
                            [105.645779, 29.286483],
                            [105.645159, 29.287162],
                            [105.644806, 29.289378],
                            [105.637274, 29.298271],
                            [105.636144, 29.300658],
                            [105.634996, 29.30406],
                            [105.634133, 29.305602],
                            [105.631056, 29.306579],
                            [105.630403, 29.307836],
                            [105.632713, 29.308407],
                            [105.634881, 29.310337],
                            [105.635152, 29.311194],
                            [105.631634, 29.312165],
                            [105.629889, 29.3141],
                            [105.630707, 29.316582],
                            [105.633646, 29.317267],
                            [105.634427, 29.318904],
                            [105.634201, 29.319806],
                            [105.635988, 29.320631],
                            [105.638509, 29.319368],
                            [105.641421, 29.318479],
                            [105.6429, 29.31839],
                            [105.645366, 29.319253],
                            [105.646592, 29.32223],
                            [105.647244, 29.325701],
                            [105.647382, 29.328271],
                            [105.648314, 29.329515],
                            [105.650983, 29.330543],
                            [105.653421, 29.333963],
                            [105.653518, 29.335758],
                            [105.652811, 29.337148],
                            [105.649596, 29.340263],
                            [105.649683, 29.341996],
                            [105.652397, 29.346139],
                            [105.653206, 29.349038],
                            [105.654478, 29.350142],
                            [105.657008, 29.350129],
                            [105.661178, 29.347008],
                            [105.663075, 29.346652],
                            [105.665059, 29.347274],
                            [105.667121, 29.348581],
                            [105.672926, 29.352921],
                            [105.675479, 29.355572],
                            [105.68162, 29.356321],
                            [105.686345, 29.357482],
                            [105.689427, 29.357089],
                            [105.691654, 29.357666],
                            [105.694153, 29.360476],
                            [105.695379, 29.363483],
                            [105.696183, 29.364606],
                            [105.700298, 29.367739],
                            [105.701988, 29.368577],
                            [105.704151, 29.369128],
                            [105.707352, 29.368627],
                            [105.709276, 29.368621],
                            [105.710075, 29.369668],
                            [105.709694, 29.371209],
                            [105.708422, 29.372826],
                            [105.708275, 29.375072],
                            [105.709074, 29.375623],
                            [105.711154, 29.374704],
                            [105.714764, 29.374869],
                            [105.716914, 29.372826],
                            [105.719155, 29.37348],
                            [105.721897, 29.375503],
                            [105.722337, 29.376867],
                            [105.724914, 29.378256],
                            [105.725488, 29.379448],
                            [105.725695, 29.381338],
                            [105.724271, 29.382886],
                            [105.724514, 29.383552],
                            [105.726879, 29.384902],
                            [105.73014, 29.384433],
                            [105.731371, 29.385061],
                            [105.735169, 29.384598],
                            [105.736744, 29.382689],
                            [105.739619, 29.381338],
                            [105.741594, 29.379867],
                            [105.740584, 29.37856],
                            [105.743261, 29.378617],
                            [105.743661, 29.377875],
                            [105.74294, 29.375865],
                            [105.745034, 29.376156],
                            [105.746012, 29.37386],
                            [105.748047, 29.373917],
                            [105.747587, 29.372484],
                            [105.749548, 29.372027],
                            [105.750471, 29.370949],
                            [105.751183, 29.371158],
                            [105.753934, 29.373879],
                            [105.754899, 29.371995],
                            [105.755716, 29.372439],
                            [105.756713, 29.374507],
                            [105.759624, 29.374697],
                            [105.76187, 29.375205],
                            [105.762375, 29.378154],
                            [105.762835, 29.378839],
                            [105.764989, 29.378624],
                            [105.767739, 29.379594],
                            [105.768649, 29.380907],
                            [105.773494, 29.394846],
                            [105.773085, 29.397713],
                            [105.771331, 29.400706],
                            [105.771078, 29.401606],
                            [105.77055, 29.408296],
                            [105.770996, 29.408936],
                            [105.773104, 29.409481],
                            [105.776236, 29.409836],
                            [105.777457, 29.411732],
                            [105.778073, 29.415048],
                            [105.779322, 29.417014],
                            [105.782013, 29.417762],
                            [105.784355, 29.420545],
                            [105.786114, 29.423525],
                            [105.789963, 29.42464],
                            [105.793779, 29.429572],
                            [105.795001, 29.430023],
                            [105.798367, 29.430346],
                            [105.800214, 29.432444],
                            [105.802684, 29.437141],
                            [105.802629, 29.438618],
                            [105.801701, 29.439468],
                            [105.80302, 29.44083],
                            [105.803731, 29.442301],
                            [105.805242, 29.449882],
                            [105.806395, 29.453519],
                            [105.808163, 29.455985],
                            [105.808361, 29.45968],
                            [105.809835, 29.463621],
                            [105.809027, 29.469521],
                            [105.813477, 29.472563],
                            [105.81389, 29.473386],
                            [105.813785, 29.475547],
                            [105.81547, 29.479571],
                            [105.816701, 29.486344],
                            [105.817895, 29.490405],
                            [105.820559, 29.496367],
                            [105.821022, 29.500434],
                            [105.824931, 29.509245],
                            [105.825546, 29.512938],
                            [105.827608, 29.516922],
                            [105.831415, 29.523167],
                            [105.833409, 29.525206],
                            [105.834947, 29.527929],
                            [105.840573, 29.532591],
                            [105.844509, 29.534281],
                            [105.848578, 29.53539],
                            [105.850989, 29.53779],
                            [105.853579, 29.539455],
                            [105.855003, 29.540044],
                            [105.858158, 29.54019],
                            [105.860652, 29.53955],
                            [105.863132, 29.538005],
                            [105.865455, 29.537378],
                            [105.86862, 29.537327],
                            [105.871463, 29.537828],
                            [105.873956, 29.539063],
                            [105.876804, 29.541785],
                            [105.876707, 29.542761],
                            [105.873483, 29.545939],
                            [105.872996, 29.546984],
                            [105.872859, 29.549124],
                            [105.87335, 29.551429],
                            [105.873975, 29.552556],
                            [105.876831, 29.554696],
                            [105.877782, 29.556152],
                            [105.88231, 29.55847],
                            [105.884046, 29.560584],
                            [105.885034, 29.563541],
                            [105.887435, 29.566972],
                            [105.890467, 29.570435],
                            [105.891445, 29.569397],
                            [105.895445, 29.570099],
                            [105.896781, 29.570004],
                            [105.897842, 29.568903],
                            [105.896469, 29.567162],
                            [105.897815, 29.565636],
                            [105.901512, 29.565516],
                            [105.902563, 29.565155],
                            [105.906577, 29.562749],
                            [105.905448, 29.561407],
                            [105.905549, 29.559869],
                            [105.906784, 29.559755],
                            [105.907298, 29.557798],
                            [105.905222, 29.555456],
                            [105.903633, 29.552518],
                            [105.903294, 29.54996],
                            [105.904015, 29.546883],
                            [105.905305, 29.545091],
                            [105.908336, 29.543381],
                            [105.91077, 29.539069],
                            [105.911836, 29.538284],
                            [105.913103, 29.538423],
                            [105.921306, 29.537448],
                            [105.925122, 29.538087],
                            [105.930362, 29.540215],
                            [105.936434, 29.542438],
                            [105.938395, 29.543983],
                            [105.936755, 29.545927],
                            [105.936599, 29.548231],
                            [105.935616, 29.549264],
                            [105.935961, 29.54996],
                            [105.937963, 29.550163],
                            [105.941251, 29.549131],
                            [105.944062, 29.548706],
                            [105.94499, 29.547522],
                            [105.945835, 29.543622],
                            [105.947722, 29.544071],
                            [105.949688, 29.547136],
                            [105.951171, 29.548466],
                            [105.953215, 29.547218],
                            [105.954721, 29.545059],
                            [105.955989, 29.542134],
                            [105.956094, 29.540747],
                            [105.955309, 29.539107],
                            [105.953458, 29.539506],
                            [105.952485, 29.538607],
                            [105.954395, 29.536036],
                            [105.956443, 29.534839],
                            [105.957835, 29.535282],
                            [105.956834, 29.537011],
                            [105.958703, 29.5376],
                            [105.96116, 29.536612],
                            [105.964765, 29.536264],
                            [105.96781, 29.536941],
                            [105.973491, 29.540715],
                            [105.975379, 29.542292],
                            [105.977271, 29.542336],
                            [105.977757, 29.539506],
                            [105.97976, 29.538683],
                            [105.981877, 29.53898],
                            [105.983774, 29.538391],
                            [105.983576, 29.537847],
                            [105.980605, 29.537226],
                            [105.980389, 29.536783],
                            [105.981519, 29.533534],
                            [105.981996, 29.533389],
                            [105.984821, 29.537213],
                            [105.987356, 29.540031],
                            [105.987659, 29.541931],
                            [105.988541, 29.542482],
                            [105.993078, 29.541494],
                            [105.99543, 29.541311],
                            [105.996555, 29.539626],
                            [105.995893, 29.537486],
                            [105.994282, 29.53551],
                            [105.994341, 29.533395],
                            [105.99599, 29.532135],
                            [105.996311, 29.531216],
                            [105.99542, 29.528968],
                            [105.995439, 29.525821],
                            [105.996702, 29.524731],
                            [105.998199, 29.524649],
                            [106.00078, 29.525092],
                            [106.002654, 29.522679],
                            [106.007811, 29.520963],
                            [106.011329, 29.520475],
                            [106.013754, 29.520988],
                            [106.014815, 29.521856],
                            [106.016372, 29.524465],
                            [106.016923, 29.526334],
                            [106.018755, 29.527379],
                            [106.032358, 29.529563],
                            [106.035417, 29.52981],
                            [106.03882, 29.529177],
                            [106.04097, 29.529462],
                            [106.045236, 29.530418],
                            [106.0546, 29.533142],
                            [106.058013, 29.533066],
                            [106.06311, 29.532268],
                            [106.066683, 29.532907],
                            [106.069416, 29.534231],
                            [106.071547, 29.53601],
                            [106.077384, 29.543926],
                            [106.078546, 29.545217],
                            [106.080511, 29.545952],
                            [106.08357, 29.546237],
                            [106.087019, 29.545901],
                            [106.089141, 29.546402],
                            [106.088695, 29.541222],
                            [106.087028, 29.535504],
                            [106.085977, 29.530577],
                            [106.083037, 29.527265],
                            [106.082918, 29.52342],
                            [106.082385, 29.520811],
                            [106.08182, 29.51962],
                            [106.079189, 29.515687],
                            [106.077751, 29.511874],
                            [106.076769, 29.507003],
                            [106.076971, 29.502575],
                            [106.077995, 29.497634],
                            [106.078156, 29.493332],
                            [106.078013, 29.491184],
                            [106.077017, 29.48336],
                            [106.075349, 29.47459],
                            [106.075414, 29.472848],
                            [106.076213, 29.470377],
                            [106.075832, 29.468342],
                            [106.073917, 29.464299],
                            [106.071813, 29.461486],
                            [106.071483, 29.458906],
                            [106.072011, 29.456847],
                            [106.073315, 29.455237],
                            [106.073682, 29.451675],
                            [106.073255, 29.448855],
                            [106.071386, 29.445895],
                            [106.070803, 29.44438],
                            [106.071524, 29.441978],
                            [106.071326, 29.439081],
                            [106.07021, 29.435531],
                            [106.06734, 29.430473],
                            [106.067377, 29.426409],
                            [106.06587, 29.424533],
                            [106.063652, 29.41896],
                            [106.064451, 29.416056],
                            [106.064235, 29.411345],
                            [106.065792, 29.409228],
                            [106.065315, 29.408467],
                            [106.062775, 29.40692],
                            [106.06013, 29.406945],
                            [106.057769, 29.40614],
                            [106.055813, 29.403813],
                            [106.055932, 29.403014],
                            [106.057709, 29.401752],
                            [106.058554, 29.401752],
                            [106.06007, 29.4029],
                            [106.061057, 29.4029],
                            [106.061714, 29.401752],
                            [106.061443, 29.398829],
                            [106.062642, 29.396146],
                            [106.064686, 29.395404],
                            [106.066706, 29.39399],
                            [106.067808, 29.391929],
                            [106.067836, 29.390934],
                            [106.06633, 29.389278],
                            [106.065471, 29.38631],
                            [106.065494, 29.384763],
                            [106.066389, 29.37934],
                            [106.065609, 29.375788],
                            [106.062917, 29.372401],
                            [106.060038, 29.366832],
                            [106.055758, 29.361269],
                            [106.051312, 29.356219],
                            [106.04964, 29.354849],
                            [106.048368, 29.353244],
                            [106.04823, 29.351741],
                            [106.04925, 29.349412],
                            [106.050003, 29.341862],
                            [106.049691, 29.340625],
                            [106.047463, 29.336507],
                            [106.04592, 29.332237],
                            [106.044152, 29.329781],
                            [106.04446, 29.327351],
                            [106.040437, 29.320072],
                            [106.039445, 29.317889],
                            [106.038173, 29.313358],
                            [106.038283, 29.312158],
                            [106.039633, 29.309753],
                            [106.040088, 29.307963],
                            [106.039564, 29.3067],
                            [106.037649, 29.304326],
                            [106.036744, 29.302409],
                            [106.036377, 29.297795],
                            [106.036446, 29.295491],
                            [106.037272, 29.28972],
                            [106.036786, 29.284921],
                            [106.036377, 29.28355],
                            [106.034301, 29.278973],
                            [106.03595, 29.276662],
                            [106.036244, 29.275506],
                            [106.033346, 29.270713],
                            [106.033309, 29.269837],
                            [106.035495, 29.266668],
                            [106.035192, 29.264998],
                            [106.034117, 29.26357],
                            [106.032161, 29.262757],
                            [106.0315, 29.261887],
                            [106.032335, 29.258039],
                            [106.033171, 29.255588],
                            [106.033181, 29.253962],
                            [106.030967, 29.253048],
                            [106.029502, 29.251537],
                            [106.026778, 29.248114],
                            [106.024528, 29.245777],
                            [106.022797, 29.244945],
                            [106.018553, 29.244062],
                            [106.016376, 29.242544],
                            [106.01121, 29.231042],
                            [106.007246, 29.220637],
                            [106.004693, 29.215505],
                            [106.003908, 29.214977],
                            [105.999641, 29.215333],
                            [105.997827, 29.214844],
                            [105.996683, 29.213611],
                            [105.997868, 29.211687],
                            [105.998052, 29.21034],
                            [105.996178, 29.208472],
                            [105.994291, 29.207284],
                            [105.990998, 29.207106],
                            [105.989942, 29.205912],
                            [105.988123, 29.201369],
                            [105.986842, 29.200194],
                            [105.983668, 29.1983],
                            [105.9832, 29.197328],
                            [105.983007, 29.194971],
                            [105.982304, 29.193497],
                            [105.97767, 29.191019],
                            [105.974644, 29.188382],
                            [105.971948, 29.184868],
                            [105.971006, 29.182402],
                            [105.972076, 29.179898],
                            [105.971268, 29.178386],
                            [105.969872, 29.178564],
                            [105.967364, 29.177693],
                            [105.966565, 29.176848],
                            [105.966014, 29.175126],
                            [105.96449, 29.165904],
                            [105.964568, 29.164957],
                            [105.965771, 29.161665],
                            [105.965867, 29.157908],
                            [105.965371, 29.156027],
                            [105.964196, 29.154152],
                            [105.962767, 29.152931],
                            [105.960618, 29.153033],
                            [105.958391, 29.153942],
                            [105.956701, 29.153828],
                            [105.95456, 29.152436],
                            [105.95428, 29.15126],
                            [105.9571, 29.149601],
                            [105.958267, 29.147935],
                            [105.957734, 29.145958],
                            [105.955157, 29.143822],
                            [105.953522, 29.142125],
                            [105.952407, 29.139436],
                            [105.950992, 29.137865],
                            [105.947502, 29.135094],
                            [105.945114, 29.132938],
                            [105.942882, 29.128335],
                            [105.94188, 29.127846],
                            [105.939166, 29.127795],
                            [105.937403, 29.127216],
                            [105.93478, 29.123954],
                            [105.933402, 29.121087],
                            [105.933347, 29.119968],
                            [105.934059, 29.117577],
                            [105.933572, 29.116089],
                            [105.931855, 29.115084],
                            [105.925228, 29.113062],
                            [105.920952, 29.110881],
                            [105.918849, 29.10945],
                            [105.916975, 29.10772],
                            [105.915542, 29.105431],
                            [105.915671, 29.104503],
                            [105.918348, 29.101189],
                            [105.918587, 29.099873],
                            [105.917475, 29.0989],
                            [105.913733, 29.099294],
                            [105.911528, 29.097933],
                            [105.910077, 29.096025],
                            [105.909494, 29.093856],
                            [105.909884, 29.090078],
                            [105.911005, 29.087394],
                            [105.913829, 29.085066],
                            [105.914045, 29.084138],
                            [105.913898, 29.080855],
                            [105.915358, 29.080098],
                            [105.919528, 29.080798],
                            [105.921889, 29.079602],
                            [105.922298, 29.078871],
                            [105.922279, 29.076434],
                            [105.920888, 29.067916],
                            [105.92103, 29.065384],
                            [105.921733, 29.060295],
                            [105.92114, 29.057801],
                            [105.919905, 29.056127],
                            [105.917742, 29.055186],
                            [105.91246, 29.054709],
                            [105.902182, 29.051629],
                            [105.89713, 29.049625],
                            [105.895358, 29.048664],
                            [105.892322, 29.046252],
                            [105.889787, 29.043383],
                            [105.885452, 29.03721],
                            [105.884914, 29.035676],
                            [105.884841, 29.032183],
                            [105.884276, 29.030694],
                            [105.882926, 29.029726],
                            [105.879766, 29.029141],
                            [105.873906, 29.029274],
                            [105.868487, 29.027881],
                            [105.864473, 29.026003],
                            [105.862236, 29.024049],
                            [105.860105, 29.021484],
                            [105.858594, 29.018779],
                            [105.857607, 29.015635],
                            [105.857331, 29.013019],
                            [105.857294, 28.99685],
                            [105.858029, 28.986779],
                            [105.856688, 28.980698],
                            [105.851687, 28.976178],
                            [105.834809, 28.969466],
                            [105.826786, 28.964397],
                            [105.82415, 28.958526],
                            [105.824756, 28.95338],
                            [105.827356, 28.94852],
                            [105.829712, 28.945024],
                            [105.830501, 28.944272],
                            [105.826455, 28.941998],
                            [105.824095, 28.941285],
                            [105.820582, 28.941049],
                            [105.819286, 28.941355],
                            [105.815149, 28.941571],
                            [105.810561, 28.940858],
                            [105.808907, 28.940017],
                            [105.804347, 28.936648],
                            [105.803437, 28.936157],
                            [105.801839, 28.936221],
                            [105.800379, 28.935418],
                            [105.797587, 28.935934],
                            [105.794992, 28.938673],
                            [105.793563, 28.94124],
                            [105.792714, 28.943457],
                            [105.792732, 28.945419],
                            [105.793329, 28.947629],
                            [105.794491, 28.948979],
                            [105.796337, 28.949648],
                            [105.799226, 28.948947],
                            [105.802675, 28.947329],
                            [105.803837, 28.947603],
                            [105.805316, 28.95045],
                            [105.807451, 28.953628],
                            [105.808857, 28.956418],
                            [105.803465, 28.957125],
                            [105.801339, 28.958188],
                            [105.79867, 28.962761],
                            [105.797472, 28.965238],
                            [105.793573, 28.969536],
                            [105.791042, 28.974452],
                            [105.789412, 28.97633],
                            [105.788415, 28.976541],
                            [105.788755, 28.977636],
                            [105.7865, 28.978928],
                            [105.781545, 28.979279],
                            [105.779083, 28.979947],
                            [105.778008, 28.981622],
                            [105.77562, 28.983602],
                            [105.77157, 28.984697],
                            [105.769641, 28.986346],
                            [105.76672, 28.989816],
                            [105.765852, 28.990459],
                            [105.762476, 28.991331],
                            [105.761884, 28.993018],
                            [105.76396, 28.996991],
                            [105.764777, 29.000441],
                            [105.764212, 29.001657],
                            [105.762876, 29.002904],
                            [105.763657, 29.005209],
                            [105.765654, 29.006768],
                            [105.765999, 29.009887],
                            [105.765636, 29.01104],
                            [105.766279, 29.012784],
                            [105.765939, 29.01391],
                            [105.764722, 29.014973],
                            [105.763432, 29.016806],
                            [105.762293, 29.017048]
                        ]
                    ]
                ]
            }
        }]
    })
}));